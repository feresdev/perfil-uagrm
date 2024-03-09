'use client'
import { useGlobalContext } from "@/app/Context/GlobalContext";
import HistoricoSection from "@/components/organisms/estudiantes/Historico";
import { useEffect } from "react";

export default function Historico() {

  // Contexto
  const { dataHistorico, errorHistorico, loadingHistorico, setDataHistorico, setErrorHistorico, setLoadingHistorico } = useGlobalContext()
  const Fetch = async () => {
    try {
      if (!dataHistorico) {
        setLoadingHistorico(true);
      }
      setErrorHistorico(null);

      const response = await fetch(`/api/v1/student/historico`, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json"
        }
      })
      if (!response.ok) {
        setDataHistorico(null);
        const res = await response.json();
        setErrorHistorico(res);
        return
      }
      const res = await response.json();
      setDataHistorico(res);
      return

    } catch (error: any) {
      console.error('Error en la solicitud:', error.message);
      setErrorHistorico({ error: { código: 500, mensaje: 'Error encontrado', detalles: 'Contacte al administrador' } })
    } finally {
      setLoadingHistorico(false);
    }
  }

  // Se ejecuta al inicio
  useEffect(() => {
    if (!dataHistorico) {
      Fetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataHistorico])

  return (
    <div className="phone:p-0 tablet:py-10 desktop:py-10 phone:w-full tablet:w-11/12 desktop:max-w-6xl mx-auto space-y-5">
      {/* Section */}
      <section className="overflow-visible">
        <div className="relative overflow-x-auto space-y-3">
          <div className="desktop:bg-dark-container-color tablet:bg-dark-container-color  desktop:border tablet:border tablet:border-dark-border-color desktop:border-dark-border-color desktop:rounded-md tablet:rounded-md phone:p-5 tablet:p-7 desktop:p-10">
            <HistoricoSection estado={{ data: dataHistorico, error: errorHistorico, loading: loadingHistorico }} />
          </div>
        </div>
      </section>
    </div>
  )
};