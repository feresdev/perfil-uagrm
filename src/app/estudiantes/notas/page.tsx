'use client'
import { useGlobalContext } from "@/app/Context/GlobalContext";
import PopupComponent from "@/components/organisms/Popup";
import NotasSection from "@/components/organisms/estudiantes/Notas";
import { usePopup } from "@/hooks";
import { validarVacio } from "@/utils/common/ValidarVacio";
import { ChangeEvent, useEffect, useState } from "react";
import { PiSpinnerBold } from "react-icons/pi";

export default function ConsultaNotas() {

  // Uso del hook del Popup
  const { isActivePop, openPopup, handlePopup } = usePopup();

  // Context
  const { dataNotas, errorNotas, loadingNotas, setDataNotas, setErrorNotas, setLoadingNotas } = useGlobalContext();
  // Estados
  const [isConLoading, setConLoading] = useState(false);
  const [form, setForm] = useState({ sem: '', ano: '' });
  const [isMsg, setMsg] = useState({ sem: '', ano: '' });

  // Funcion que meneja los cambios de los inputs
  const manejoCambios = (event: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;

    if (id === 'sem') {
      validarVacio(value, setMsg, id, 'Requerido');
    }
    if (id === 'ano') {
      validarVacio(value, setMsg, id, 'Requerido');
    }

    setForm((prev) => ({
      ...prev,
      [id]: value
    }))

  }

  const hanleSubmit = async (event?: React.FormEvent<HTMLFormElement>) => {
    if (event) {
      event.preventDefault();
      setMsg({ sem: '', ano: '' });
      if (
        !validarVacio(form.sem, setMsg, 'sem', 'Requerido') ||
        !validarVacio(form.ano, setMsg, 'ano', 'Requerido')
      ) {
        return;
      }
      setConLoading(true);
    } else {
      setLoadingNotas(true);
    }

    try {
      const response = await fetch(`/api/v1/student/notas`, {
        method: 'POST',
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json"
        }
      })
      if (!response.ok) {
        setDataNotas(null);
        const res = await response.json();
        setErrorNotas(res);
        return
      }
      const res = await response.json();
      setErrorNotas(null);
      setDataNotas(res);
      return

    } catch (error: any) {
      console.error('Error en la solicitud:', error.message);
      setErrorNotas({ error: { código: 500, mensaje: 'Error encontrado', detalles: 'Contacte al administrador' } })
    } finally {
      setLoadingNotas(false);
      if (event) {
        setConLoading(false);
        openPopup(false);
      }
    }
  }

  useEffect(() => {
    if (!dataNotas) {
      hanleSubmit();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataNotas])

  return (
    <div className="phone:p-0 tablet:py-10 desktop:py-10 phone:w-full tablet:w-11/12 desktop:max-w-6xl mx-auto">
      {/* Section */}
      <section className="overflow-visible">
        <div className="relative overflow-x-auto space-y-3">
          <div className="desktop:bg-dark-container-color tablet:bg-dark-container-color  desktop:border tablet:border tablet:border-dark-border-color desktop:border-dark-border-color desktop:rounded-md tablet:rounded-md phone:p-5 tablet:p-7 desktop:p-10">
            <NotasSection estado={{ data: dataNotas, error: errorNotas, loading: loadingNotas }} popup={(active) => openPopup(active)} />
          </div>
        </div>
      </section>

      {/* Popup Consulta */}
      <PopupComponent size="small" title={'Formulario de consulta'} visible={isActivePop} onPopup={handlePopup}>
        <form noValidate onSubmit={hanleSubmit} >
          <div className='space-y-4'>

            <div className='grid gap-3 desktop:grid desktop:grid-cols-12'>

              <div className='col-span-12 text-dark-text-color text-sm'>
                <span className='text-dark-title-color/75'>{dataNotas?.nombre_apellidos}</span> <br />
                Ingrese el semestre y año (Gestión) del cual desea consultar sus notas.
              </div>

              {/* Inputs */}
              <div className='col-span-12 flex gap-2 border-t pt-4 border-dark-border-alt-color'>
                <div className="flex-col flex gap-1">
                  <span className=" text-dark-text-color text-sm">Semestre</span>
                  <input onChange={manejoCambios} value={form.sem} disabled={isConLoading} type="number" id='sem' name='sem' className={`${isMsg.sem ? 'focus-visible:ring-red-900/60 border-red-900/80' : 'focus-visible:ring-dark-text-color/20 border-dark-border-alt-color'} no-spinners appearance-none  peer/input block box-border w-full rounded-md shadow-sm transition-all text-dark-text-color focus-visible:shadow-md outline-none focus:ring-2 bg-[#282828] border text-3xl text-center px-4 py-1.5`} />
                  <p className='text-sm pt-2 text-red-900 phone:mx-auto w-full'>
                    {isMsg.sem ? isMsg.sem : ''}
                  </p>
                </div>

                <div className="flex-col flex gap-1">
                  <span className=" text-dark-text-color text-sm">Año</span>
                  <input onChange={manejoCambios} value={form.ano} disabled={isConLoading} type="number" id='ano' name='ano' className={`${isMsg.ano ? 'focus-visible:ring-red-900/60 border-red-900/80' : 'focus-visible:ring-dark-text-color/20 border-dark-border-alt-color'} no-spinners appearance-none peer/input block box-border w-full rounded-md shadow-sm transition-all text-dark-text-color focus-visible:shadow-md outline-none focus:ring-2 bg-[#282828] border text-3xl text-center px-4 py-1.5`} />
                  <p className='text-sm pt-2 text-red-900 phone:mx-auto w-full'>
                    {isMsg.ano ? isMsg.ano : ''}
                  </p>
                </div>
              </div>

            </div>

            <div className='flex pt-3 gap-2 space-x-3 justify-end border-t border-dark-border-alt-color'>
              <button type='submit' disabled={isConLoading} className={`${isConLoading ? 'bg-gray-600 border border-gray-600 text-dark-title-color/50' : 'bg-blue-600 border border-blue-500 text-dark-title-color'} flex text-center items-center justify-center text-sm space-x-2 px-4 py-1 rounded-md`}>
                {isConLoading && <PiSpinnerBold size='1rem' className='animate-spin' />}
                <span>{isConLoading ? 'Consultando' : 'Realizar consulta'}</span>
              </button>
            </div>

          </div>
        </form>
      </PopupComponent>
    </div>
  )
};