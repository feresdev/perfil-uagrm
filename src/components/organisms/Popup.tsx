'use client';
import { useEffect, useState } from 'react';
import { FiX } from 'react-icons/fi';

interface ComponentsProps {
  size: string;
  children: React.ReactNode;
  title: string | undefined;
  visible: boolean;
  onPopup: (isActive: boolean) => void;
}

export default function PopupComponent({
  children,
  size,
  title,
  visible,
  onPopup,
}: ComponentsProps) {
  const [isActivePopup, setActivePopup] = useState(visible);
  const [isRendered, setIsRendered] = useState(visible);

  useEffect(() => {
    if (visible) {
      setIsRendered(true);
      setTimeout(() => {
        setActivePopup(true);
      }, 100);
    } else {
      setActivePopup(false);
      setTimeout(() => {
        setIsRendered(false);
      }, 300);
    }
  }, [visible, onPopup]);

    // Función para calcular el ancho de acuerdo al valor de 'size'
    const calculateWidth = () => {
      switch (size) {
        case 'small':
          return 'desktop:w-96 tablet:w-96 phone:w-full';
        case 'medium':
          return 'desktop:w-[800px] tablet:w-[600px] phone:w-full';
        // Agrega más casos según sea necesario
        default:
          return 'w-full'; // Valor por defecto o manejo de otros casos
      }
    };

  return isRendered ? (
    <div
      className={`${isActivePopup
        ? 'opacity-100 pointer-events-auto translate-y-0'
        : 'opacity-0 pointer-events-none -translate-y-1/2'
        } transition transition-300 fixed z-30 inset-0`}
    >
      <div className="flex items-center justify-center h-full py-4 px-4 overflow-y-auto">
        <div className="fixed inset-0">
          <div
            className="absolute inset-0 bg-dark-body-alt-color opacity-75"
            onClick={() => onPopup(false)}
          ></div>
        </div>

        <div className={`${calculateWidth()} bg-[#232323] rounded-md overflow-auto shadow-l transform`}>
          <div className="py-3 h2 text-dark-title-color px-6 flex items-center justify-between space-y-1 bg-[#282828] border-b border-dark-border-alt-color">
            {title} <FiX onClick={() => onPopup(false)} size={'1rem'} className='cursor-pointer' />
          </div>
          <div className="p-6 bg-[#232323]">{children}</div>
        </div>
      </div>
    </div>
  ) : null;
}
