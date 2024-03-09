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
                    </div>
                </header>
            </div>
        </div>
    )
};