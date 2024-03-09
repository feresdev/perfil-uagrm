'use client'
import DatosPersonalesForm from "@/components/organisms/estudiantes/DatosPersonales";
import { useEffect } from "react";
import { useGlobalContext } from "../Context/GlobalContext";

export default function Inicio() {

  // Context Provider
  const { dataPersonales, setDataPersonales, errorPersonales, setErrorPersonales, loadingPersonales, setLoadingPersonales } = useGlobalContext();
  const Fetch = async () => {
    try {
      if (!dataPersonales) {
        setLoadingPersonales(true);
      }
      setErrorPersonales(null);

      const response = await fetch(`/api/v1/student/info`, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json"
        }
      })
      if (!response.ok) {
        setDataPersonales(null);
        const res = await response.json();
        setErrorPersonales(res);
        return
      }
      const res = await response.json();
      setDataPersonales(res);
      return

    } catch (error: any) {
      console.error('Error en la solicitud:', error.message);
      setErrorPersonales({ error: { código: 500, mensaje: 'Error encontrado', detalles: 'Contacte al administrador' } })
    } finally {
      setLoadingPersonales(false);
    }
  }

  // Se ejecuta al inicio
  useEffect(() => {
    if (!dataPersonales) {
      Fetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataPersonales])

  return (
    <div className="phone:px-4 phone:py-4 tablet:py-10 desktop:py-10 phone:w-full tablet:w-11/12 desktop:max-w-6xl mx-auto space-y-5">

      {/* Bloque Grid */}
      <section className="overflow-visible">
        <div className="relative overflow-x-auto">
          <div className="bg-dark-container-color border border-dark-border-color rounded-md phone:p-5 tablet:p-7 desktop:p-10">
            <DatosPersonalesForm estado={{ data:dataPersonales, error:errorPersonales, loading:loadingPersonales }} />
          </div>
        </div>
      </section>

    </div>
  )
};