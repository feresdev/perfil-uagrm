'use client'
import { useGlobalContext } from "@/app/Context/GlobalContext";
import BoletaSection from "@/components/organisms/estudiantes/Boleta";
import { useEffect } from "react";

export default function BoletaInscripcion() {

  // Contexto
  const { dataBoleta, errorBoleta, loadingBoleta, setDataBoleta, setErrorBoleta, setLoadingBoleta } = useGlobalContext();
  const Fetch = async () => {
    try {
      if (!dataBoleta) {
        setLoadingBoleta(true);
      }
      setErrorBoleta(null);

      const response = await fetch(`/api/v1/student/boleta`, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json"
        }
      })
      if (!response.ok) {
        setDataBoleta(null);
        const res = await response.json();
        setErrorBoleta(res);
        return
      }
      const res = await response.json();
      setDataBoleta(res);
      return

    } catch (error: any) {
      console.error('Error en la solicitud:', error.message);
      setErrorBoleta({ error: { código: 500, mensaje: 'Error encontrado', detalles: 'Contacte al administrador' } })
    } finally {
      setLoadingBoleta(false);
    }
  }

  // Se ejecuta al inicio
  useEffect(() => {
    if (!dataBoleta) {
      Fetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataBoleta])

  return (
    <div className="phone:p-0 tablet:py-10 desktop:py-10 phone:w-full tablet:w-11/12 desktop:max-w-6xl mx-auto space-y-5">
      {/* Section */}
      <section className="overflow-visible">
        <div className="relative overflow-x-auto space-y-3">
          <div className="desktop:bg-dark-container-color tablet:bg-dark-container-color  desktop:border tablet:border tablet:border-dark-border-color desktop:border-dark-border-color desktop:rounded-md tablet:rounded-md phone:p-5 tablet:p-7 desktop:p-10">
            <BoletaSection estado={{ data: dataBoleta, error: errorBoleta, loading: loadingBoleta }} />
          </div>
        </div>
      </section>
    </div>
  )
};