'use client'
import { useGlobalContext } from "@/app/Context/GlobalContext";
import AcademicoSection from "@/components/organisms/estudiantes/Academico";
import { useEffect } from "react";

export default function Academico() {

  // Contexto
  const { dataAvance, errorAvance, loadingAvance, setDataAvance, setErrorAvance, setLoadingAvance } = useGlobalContext();
  const Fetch = async () => {
    try {
      if (!dataAvance) {
        setLoadingAvance(true);
      }
      setErrorAvance(null);

      const response = await fetch(`/api/v1/student/academico`, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json"
        }
      })
      if (!response.ok) {
        setDataAvance(null);
        const res = await response.json();
        setErrorAvance(res);
        return
      }
      const res = await response.json();
      setDataAvance(res);
      return

    } catch (error: any) {
      console.error('Error en la solicitud:', error.message);
      setErrorAvance({ error: { código: 500, mensaje: 'Error encontrado', detalles: 'Contacte al administrador' } })
    } finally {
      setLoadingAvance(false);
    }
  }

  // Se ejecuta al inicio
  useEffect(() => {
    if (!dataAvance) {
      Fetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataAvance])

  return (
    <div className="phone:p-0 tablet:py-10 desktop:py-10 phone:w-full tablet:w-11/12 desktop:max-w-6xl mx-auto space-y-5">
      {/* Section */}
      <section className="overflow-visible">
        <div className="relative overflow-x-auto space-y-3">
          <div className="desktop:bg-dark-container-color tablet:bg-dark-container-color  desktop:border tablet:border tablet:border-dark-border-color desktop:border-dark-border-color desktop:rounded-md tablet:rounded-md phone:p-5 tablet:p-7 desktop:p-10">
            <AcademicoSection estado={{ data: dataAvance, error: errorAvance, loading: loadingAvance }} />
          </div>
        </div>
      </section>
    </div>
  )
};