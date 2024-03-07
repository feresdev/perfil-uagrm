import { logout } from '@/helpers/logout';
import Image from 'next/image';
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { FiFileText, FiHome, FiLock, FiLogIn, FiMenu, FiTrendingUp, FiX } from 'react-icons/fi';

export default function AsideAdmin() {
    const ruta = usePathname();
    const router = useRouter();

    const [isAsideActive, setAsideActive] = useState(false);
    const toggleAside = () => {
        setAsideActive(!isAsideActive);
    };
    const closeAside = () => {
        setAsideActive(false);
    };

    // Función para determinar si un enlace está activo
    const isLinkActive = (hrefBase: string) => {
        return ruta === hrefBase;
    };

    // Funcion para cerrar Sesion
    const handleLogout = async () => {
        const status = await logout();
        if (status) {
            router.push('/');
        } else {
            console.error('Error:', status);
        }
    }

    return (
        <div className='relative'>
            <div className=" desktop:invisible tablet:invisible fixed top-[1rem] right-4 z-40 text-dark-title-color" onClick={toggleAside} >
                {/* Icono de tu botón para abrir/cerrar */}
                {isAsideActive ? <FiX size={'1.3rem'} /> : <FiMenu size={'1.3rem'} />}
            </div>
            <div className={` ${isAsideActive ? 'opacity-50 desktop:visible fixed inset-0' : 'opacity-0 desktop:invisible'} desktop:invisible tablet:invisible transition-opacity duration-75  bg-dark-body-alt-color z-20`} onClick={closeAside}></div>

            <aside className={`${isAsideActive ? 'phone:translate-x-0' : 'phone:-translate-x-full'
                } transition-transform desktop:w-56 tablet:w-56 phone:w-64 h-full bg-dark-body-color border-r border-dark-border-color z-20 fixed left-0 bottom-0 top-0 transform`}>

                {/* Header Title */}
                <div className="h-14 border-dark-border-color border-b items-center justify-center flex desktop:px-6 tablet:px-4 phone:px-4">
                    <div className="w-full">
                        <Image src={'/uagrm.webp'} width={180} height={1} priority alt="Logo Oficial"></Image>
                    </div>
                </div>

                <nav className='desktop:px-6 tablet:px-4 phone:px-4 py-4 overflow-y-auto h-full'>
                    <ul>

                        {/* Inicio */}
                        <div className='pb-4'>
                            <li>
                                <Link href='/estudiantes'>
                                    <div onClick={closeAside} className={`${isLinkActive('/estudiantes') && 'bg-dark-container-alt-color font-medium'} px-4 transition-colors flex items-center w-full h-10 rounded text-gray-400 hover:text-dark-title-color/90 hover:bg-dark-container-alt-color`}>
                                        <button className='flex text-sm gap-1.5 justify-center'>
                                            <FiHome size='1.2rem' />Inicio
                                        </button>
                                    </div>
                                </Link>
                            </li>
                        </div>

                        {/* Opciones */}
                        <div className='py-4 border-t border-dark-container-alt-color'>
                            <div className='flex items-center w-full pb-1 text-gray-400/70'>
                                <span className='flex text-sm justify-center'>Opciones</span>
                            </div>
                            <li className='flex flex-col gap-2'>
                                <Link href='/estudiantes'>
                                    <div onClick={closeAside} className={`${isLinkActive('/estudiantes/historico') && 'bg-dark-container-alt-color font-medium'} px-4 transition-colors flex items-center w-full h-10 rounded text-gray-400 hover:text-dark-title-color/90 hover:bg-dark-container-alt-color`}>
                                        <button className='flex text-sm gap-1.5 justify-center'>
                                            <FiFileText size='1.2rem' />Histórico
                                        </button>
                                    </div>
                                </Link>
                                <Link href='/estudiantes'>
                                    <div onClick={closeAside} className={`${isLinkActive("/estudiantes/avance") && 'bg-dark-container-alt-color font-medium'} px-4 transition-colors flex items-center w-full h-10 rounded text-gray-400 hover:text-dark-title-color/90 hover:bg-dark-container-alt-color`}>
                                        <button className='flex text-sm gap-1.5 justify-center truncate'>
                                            <FiTrendingUp size='1.2rem' />Avance académico
                                        </button>
                                    </div>
                                </Link>
                                <Link href='/estudiantes'>
                                    <div onClick={closeAside} className={`${isLinkActive('/estudiantes/bloqueos') && 'bg-dark-container-alt-color font-medium'} px-4 transition-colors flex items-center w-full h-10 rounded text-gray-400 hover:text-dark-title-color/90 hover:bg-dark-container-alt-color`}>
                                        <button className='flex text-sm gap-1.5 justify-center'>
                                            <FiLock size='1.2rem' />Bloqueos
                                        </button>
                                    </div>
                                </Link>
                            </li>
                        </div>

                        {/* Cierre de sesion */}
                        <div className='fixed bottom-0 right-0 left-0 desktop:px-6 tablet:px-4 phone:px-4 py-2 bg-dark-body-color border-t border-dark-container-alt-color'>
                            <li>
                                <div onClick={handleLogout} className='px-4 transition-colors flex items-center w-full h-10 rounded  text-gray-400 hover:text-dark-title-color'>
                                    <button className='flex text-sm gap-1.5 justify-center'>
                                        <FiLogIn size='1.2rem' />Cerrar Sessión
                                    </button>
                                </div>
                            </li>
                        </div>
                    </ul>
                </nav>
            </aside>
        </div>
    )

}