'use client'
import DatosPersonalesForm from "@/components/organisms/estudiantes/Inicio/DatosPersonales";
import { ErrorResponse } from "@/types/errorResponse";
import { Main } from "@/types/estudiantes";
import { useEffect, useState } from "react";

export default function Inicio() {

  // Get del users: Se realiza la conexion a la API
  const [data, setData] = useState<Main | null>();
  const [error, setError] = useState<ErrorResponse | null>();
  const [loading, setLoading] = useState(false);
  const Fetch = async () => {
    try {
      if (!data) {
        setLoading(true);
      }
      setError(null);

      const response = await fetch(`/api/v1/student/info`, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json"
        }
      })
      if (!response.ok) {
        setData(null);
        const res = await response.json();
        setError(res);
        return
      }
      const res = await response.json();
      setData(res);
      return

    } catch (error: any) {
      console.error('Error en la solicitud:', error.message);
      setError({ error: { código: 500, mensaje: 'Error encontrado', detalles: 'Contacte al administrador' } })
    } finally {
      setLoading(false);
    }
  }

  // Se ejecuta al inicio
  useEffect(() => {
    Fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="phone:px-4 phone:py-4 tablet:py-10 desktop:py-10 phone:w-full tablet:w-11/12 desktop:max-w-6xl mx-auto space-y-5">

      {/* Bloque Grid */}
      <section className="overflow-visible">
        <div className="relative overflow-x-auto">
          <div className="bg-dark-container-color border border-dark-border-color rounded-md phone:p-5 tablet:p-7 desktop:p-10">
            <DatosPersonalesForm estado={{ data, error, loading }} />
          </div>
        </div>
      </section>
      
    </div>
  )
};