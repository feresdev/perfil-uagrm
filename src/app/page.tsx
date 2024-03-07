import Image from "next/image"
import Link from "next/link"
import { PiChalkboardTeacher, PiFolderUserDuotone, PiStudent } from "react-icons/pi"

export default function Page() {
  return (
    <main>
      <section className="relative desktop:py-14 tablet:py-12 phone:py-10 px-4">
        <div className="wrapper-banner max-w-xl">
          <div className="text-center mx-auto">

            <div className="w-full container py-6 justify-center flex">
              <Image src={'/uagrm.webp'} width={250} height={1} priority alt="Logo Oficial" className="object-cover"></Image>
            </div>
            <div className="mt-4">
              <h1 className="h1 text-dark-title-color font-medium">
                Bienvenido al Perfil
              </h1>
              <p className="text-dark-text-color desktop:text-base tablet:text-base phone:text-sm">
                Elige el tipo de cuenta:
              </p>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="max-w-5xl mx-auto">
          <ul className="my-6 mx-auto grid gap-4 phone:grid-cols-2 tablet:grid-cols-3 desktop:grid-cols-3">

            {/* Estudiantes */}
            <li className="list-none relative">
              <Link href={`/login/?go=estudiantes`}>
                <div className="phone:p-3 tablet:p-4 desktop:p-6 bg-dark-container-color border border-dark-border-color rounded-md transition ease-in-out duration-150 cursor-pointer hover:border-dark-border-alt-color/50 text-dark-text-color hover:text-dark-title-color">
                  <div className="relative flex flex-col">
                    <div className="p-4 desktop:h-40 rounded-md flex flex-col items-center justify-center bg-dark-border-color">
                      <PiStudent size={'3.5rem'} />
                      <h2 className="desktop:text-lg w-full text-center">Estudiantes</h2>
                    </div>
                  </div>
                </div>
              </Link>
            </li>

            {/* Docentes */}
            <li className="list-none relative">
              <Link href={`#`}>
                <div className="phone:p-3 tablet:p-4 desktop:p-6 bg-dark-container-color border border-dark-border-color rounded-md transition ease-in-out duration-150 cursor-pointer hover:border-dark-border-alt-color/50 text-dark-text-color hover:text-dark-title-color">
                  <div className="relative flex flex-col">
                    <div className="p-4 desktop:h-40 rounded-md flex flex-col items-center justify-center bg-dark-border-color">
                      <PiChalkboardTeacher size={'3.5rem'} />
                      <h2 className="desktop:text-lg w-full text-center">Docentes</h2>
                    </div>
                  </div>
                </div>
              </Link>
            </li>

            {/* Administrativos */}
            <li className="list-none relative phone:col-span-2">
              <Link href={`#`}>
                <div className="phone:p-3 tablet:p-4 desktop:p-6 bg-dark-container-color border border-dark-border-color rounded-md transition ease-in-out duration-150 cursor-pointer hover:border-dark-border-alt-color/50 text-dark-text-color hover:text-dark-title-color">
                  <div className="relative flex flex-col">
                    <div className="p-4 desktop:h-40 rounded-md flex flex-col items-center justify-center bg-dark-border-color">
                      <PiFolderUserDuotone size={'3.5rem'} />
                      <h2 className="desktop:text-lg w-full text-center">Administrativos</h2>
                    </div>
                  </div>
                </div>
              </Link>
            </li>

          </ul>
        </div>

        <div className="mt-3 text-center mx-auto">
          <Link href='#' className="text-dark-text-color desktop:text-base tablet:text-base phone:text-sm">
            ¿Olvidaste tu contraseña?
          </Link>
        </div>

      </section>
    </main>
  )
};