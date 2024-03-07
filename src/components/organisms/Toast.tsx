'use client';
import { useEffect, useState } from 'react';
import { FiAlertCircle, FiCheckCircle, FiX } from 'react-icons/fi';

interface ToastComponentsProps {
  status: boolean | null;
  title: string;
  description: string
  visible: boolean;
}

export default function ToastComponent({
  status,
  title,
  description,
  visible
}: ToastComponentsProps) {
  const [isActiveToast, setActiveToast] = useState(visible);
  const [isRendered, setIsRendered] = useState(visible);

  useEffect(() => {
    if (isActiveToast || visible) {
      // Cuando es visible, renderiza el componente
      setIsRendered(true);
      setTimeout(() => {
        setActiveToast(true);
      }, 100);

      // Oculta el toast después de 5 segundos
      const hideTimeout = setTimeout(() => {
        setActiveToast(false);
      }, 4000);

      // Elimina el componente del DOM después de 5 segundos
      const removeTimeout = setTimeout(() => {
        setIsRendered(false);
      }, 4200); // 5000 (ocultar) + 300 (espera adicional)

      // Limpia los timeouts cuando el componente se desmonta o deja de ser visible
      return () => {
        clearTimeout(hideTimeout);
        clearTimeout(removeTimeout);
      };
    }
    else {
      // Si no es visible, oculta el toast después de 300ms
      setTimeout(() => {
        setActiveToast(false);
      }, 4000);

      // Elimina el componente del DOM después de 300ms
      const removeTimeout = setTimeout(() => {
        setIsRendered(false);
      }, 4200);

      // Limpia el timeout cuando el componente se desmonta o deja de ser visible
      return () => {
        clearTimeout(removeTimeout);
      };
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  return isRendered ? (
    <div
      className={`${isActiveToast
        ? 'opacity-100 pointer-events-auto translate-y-0'
        : 'opacity-0 pointer-events-none -translate-y-full'
        } transition-300 transition fixed z-40 top-0 left-0 right-0`}
    >
      <div className="flex items-start phone:justify-center desktop:justify-end py-4 px-4 overflow-y-auto">
        <div className='desktop:w-96 tablet:w-96 phone:w-full bg-[#232323] rounded-md overflow-auto shadow-l transform'>
          <div className='flex relative w-full'>

            <div className="py-3 h2 text-dark-title-color px-4 flex items-center justify-center">
              {status ? <FiCheckCircle size={'1.3rem'} className=' text-green-600' /> : <FiAlertCircle size={'1.3rem'} className=' text-red-500' />}
            </div>

            <div className='flex flex-row space-x-2 w-full justify-between py-3'>
              <label className='block text-dark-title-color text-sm'>
                <span>{title}</span>
                <p className='text-dark-text-color '>{description}</p>
              </label>
            </div>

            <div className="py-3 h2 text-dark-title-color pl-2 pr-4 flex items-center justify-center">
              <FiX onClick={() => setActiveToast(false)} size={'1rem'} className='cursor-pointer' />
            </div>

            <div className={`${status ? 'border-green-600' : 'border-red-500'} border-[1.55px] absolute w-full bottom-0 animate-pulse`}></div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
