import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function HeaderAdmin() {
    const [isTitle, setTitle] = useState<string>('');
    const ruta = usePathname();

    useEffect(() => {
        const title = document.title;
        const headerTitle = title.split('|');
        setTitle(headerTitle[0].trim());
    }, [ruta])

    return (
        <div className="fixed top-0 w-full z-10">
            <div className="relative">
                <header className="header">
                    <div className="wrapper flex items-center">
                        <div className="w-full">
                            <h1 className="items-center desktop:h2 tablet:h2 phone:text-lg phone:font-medium text-dark-title-color/90">
                                {isTitle}
                            </h1>
                        </div>
                        <div className="flex justify-between items-center w-full">
                            <nav>
                                {/* <ul className="flex items-center gap-6">
                                    <div className="relative cursor-pointer">
                                        <span className="text-dark-text-lighter flex items-center gap-1">
                                            <span>
                                                <Link href='/' className="nav-item flex items-center gap-2">
                                                    <span>Cursos</span>
                                                </Link>
                                            </span>
                                            <BiChevronDown/>
                                        </span>
                                    </div>
                                    <div className="relative cursor-pointer">
                                        <span className="text-dark-text-lighter flex items-center gap-1">
                                            <span>
                                                <Link href='/' className="nav-item flex items-center gap-2">
                                                    <span>Cursos</span>
                                                </Link>
                                            </span>
                                            <BiChevronDown/>
                                        </span>
                                    </div>
                                </ul> */}
                            </nav>
                            <div className="flex gap-2 items-center">
                                <div className="flex gap-4 desktop:gap-2 items-center">
                                    <div className="relative">
                                        {/* <button disabled={isLoggingOut} className={`flex space-x-1 text-center items-center justify-center text-sm text-dark-text-color bg-dark-container-alt-color border border-dark-border-alt-color  rounded-md px-3 py-1`}>
                                            {isLoggingOut && <PiSpinnerBold size='1rem' className='animate-spin' />}
                                            <span>
                                                {isLoggingOut ? 'Cerrando' : 'Cerrar sesión'}
                                            </span>
                                        </button> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </div>
    )
};