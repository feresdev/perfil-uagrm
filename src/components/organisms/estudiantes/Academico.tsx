'use client'
import { FiTrendingDown, FiTrendingUp, FiUser } from 'react-icons/fi';
import { ErrorResponse } from '@/types/errorResponse';
import Img from '../ImgOpacity';
import { AcademicoMain } from '@/types/academico';

interface ComponentsProps {
    estado: { data: AcademicoMain | undefined | null, error: ErrorResponse | null | undefined, loading: boolean };
}

export default function AcademicoSection({ estado: { data, error, loading } }: ComponentsProps) {
    return (
        <div>

            {/* Loading */}
            {loading && (
                <div className='flex flex-col gap-4'>
                    {/* Banner de fondo y logo */}
                    <div className='bg-dark-border-color animate-pulse relative gap-2 rounded-t-md phone:-mx-5 phone:-mt-5 tablet:-mt-7 tablet:-mx-7 desktop:-mx-10 desktop:-mt-10 phone:h-36 tablet:h-40 desktop:h-44'>
                        {/* Avatar */}
                        <div className='-bottom-6 absolute phone:ml-5 tablet:ml-7 desktop:ml-10 w-32 h-32 bg-dark-border-color border border-dark-border-alt-color flex items-center justify-center rounded-full'>
                            <div className='w-[6.5rem] h-[6.5rem] bg-dark-body-color animate-pulse rounded-full'>
                            </div>
                        </div>
                        {/* PPA */}
                        <div className='absolute phone:right-5 bottom-5 tablet:right-7 desktop:right-10'>
                            <div className={`bg-dark-container-color animate-pulse px-3 phone:py-0.5 desktop:py-1 tablet:py-1 desktop:h-[35px] tablet:h-5 phone:h-[30px] w-32 font-medium rounded-md flex items-center justify-center`}></div>
                        </div>
                    </div>
                    {/* Data de informacion */}
                    <div className='flex mt-4 w-full'>
                        <div className='w-full gap-1.5 flex flex-col'>
                            <div className='bg-dark-border-color animate-pulse h-[35px] w-3/4 rounded-md'></div>
                            <div className='flex phone:flex-col items-start gap-1.5'>
                                <div className={`bg-dark-border-color animate-pulse h-[35px] w-1/2 flex items-center rounded-md`}></div>
                                <div className={`bg-dark-border-color animate-pulse h-[35px] w-full flex items-center rounded-md`}></div>
                            </div>
                        </div>
                    </div>
                    {/* Tabla de materias */}
                    <div className='flex phone:flex-col justify-between w-full'>
                        <div className='border-t border-dark-border-alt-color pt-6 flex w-full'>
                            <section className="overflow-visible w-full">
                                <div className="rounded relative overflow-x-auto">
                                    <div className="inline-block min-w-full align-middle">
                                        <div className="table-container">
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th className="py-3 px-4 text-left"><span className='bg-dark-border-alt-color flex animate-pulse rounded-md h-[20px] w-full phone:w-20'></span></th>
                                                        <th className="py-3 px-4 text-left table-cell"><span className='bg-dark-border-alt-color flex animate-pulse rounded-md h-[20px] w-full phone:w-20'></span></th>
                                                        <th className="py-3 px-4 text-left table-cell"><span className='bg-dark-border-alt-color flex animate-pulse rounded-md h-[20px] w-full phone:w-20'></span></th>
                                                        <th className="py-3 px-4 text-left"><span className='bg-dark-border-alt-color flex animate-pulse rounded-md h-[20px] w-full phone:w-20'></span></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="relative">
                                                        <td className="whitespace-nowrap">
                                                            <div className="text-td-alt px-2 py-3 h-full bg-dark-border-alt-color animate-pulse rounded-md flex"></div>
                                                        </td>
                                                        <td className="whitespace-nowrap">
                                                            <div className="text-td-alt px-2 py-3 h-full bg-dark-border-alt-color animate-pulse rounded-md flex"></div>
                                                        </td>
                                                        <td className="whitespace-nowrap">
                                                            <div className="text-td-alt px-2 py-3 h-full bg-dark-border-alt-color animate-pulse rounded-md flex"></div>
                                                        </td>
                                                        <td className="whitespace-nowrap">
                                                            <div className="text-td-alt px-2 py-3 h-full bg-dark-border-alt-color animate-pulse rounded-md flex"></div>
                                                        </td>
                                                    </tr>
                                                    <tr className="relative">
                                                        <td className="whitespace-nowrap">
                                                            <div className="text-td-alt px-2 py-3 h-full bg-dark-border-alt-color animate-pulse rounded-md flex"></div>
                                                        </td>
                                                        <td className="whitespace-nowrap">
                                                            <div className="text-td-alt px-2 py-3 h-full bg-dark-border-alt-color animate-pulse rounded-md flex"></div>
                                                        </td>
                                                        <td className="whitespace-nowrap">
                                                            <div className="text-td-alt px-2 py-3 h-full bg-dark-border-alt-color animate-pulse rounded-md flex"></div>
                                                        </td>
                                                        <td className="whitespace-nowrap">
                                                            <div className="text-td-alt px-2 py-3 h-full bg-dark-border-alt-color animate-pulse rounded-md flex"></div>
                                                        </td>
                                                    </tr>
                                                    <tr className="relative">
                                                        <td className="whitespace-nowrap">
                                                            <div className="text-td-alt px-2 py-3 h-full bg-dark-border-alt-color animate-pulse rounded-md flex"></div>
                                                        </td>
                                                        <td className="whitespace-nowrap">
                                                            <div className="text-td-alt px-2 py-3 h-full bg-dark-border-alt-color animate-pulse rounded-md flex"></div>
                                                        </td>
                                                        <td className="whitespace-nowrap">
                                                            <div className="text-td-alt px-2 py-3 h-full bg-dark-border-alt-color animate-pulse rounded-md flex"></div>
                                                        </td>
                                                        <td className="whitespace-nowrap">
                                                            <div className="text-td-alt px-2 py-3 h-full bg-dark-border-alt-color animate-pulse rounded-md flex"></div>
                                                        </td>
                                                    </tr>
                                                    <tr className="relative">
                                                        <td className="whitespace-nowrap">
                                                            <div className="text-td-alt px-2 py-3 h-full bg-dark-border-alt-color animate-pulse rounded-md flex"></div>
                                                        </td>
                                                        <td className="whitespace-nowrap">
                                                            <div className="text-td-alt px-2 py-3 h-full bg-dark-border-alt-color animate-pulse rounded-md flex"></div>
                                                        </td>
                                                        <td className="whitespace-nowrap">
                                                            <div className="text-td-alt px-2 py-3 h-full bg-dark-border-alt-color animate-pulse rounded-md flex"></div>
                                                        </td>
                                                        <td className="whitespace-nowrap">
                                                            <div className="text-td-alt px-2 py-3 h-full bg-dark-border-alt-color animate-pulse rounded-md flex"></div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td colSpan={6}>
                                                            <nav className="flex items-center justify-between overflow-hidden">
                                                                <div className="block bg-dark-border-alt-color animate-pulse rounded-md h-[15px] w-1/2"></div>
                                                            </nav>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            )}

            {/* Error */}
            {!loading && error && (
                <div>
                    <h1 className='text-sm text-dark-text-color'>
                        {error.error.detalles}
                    </h1>
                </div>
            )}

            {/* Data */}
            {!loading && data && (
                <div className='flex flex-col gap-4'>

                    {/* Banner de fondo y logo */}
                    <div className='relative gap-2 rounded-t-md phone:-mx-5 phone:-mt-5 tablet:-mt-7 tablet:-mx-7 desktop:-mx-10 desktop:-mt-10 phone:h-36 tablet:h-40 desktop:h-44 bg-blue-900'>
                        <Img
                            alt="Portadas UAGRM"
                            fill
                            className="aspect-video object-cover w-full flex desktop:rounded-t-md tablet:rounded-t-md"
                            src="/portadaTwo.jpg">
                        </Img>

                        <div className='-bottom-6 absolute phone:ml-5 tablet:ml-7 desktop:ml-10 w-32 h-32 bg-dark-border-color border border-dark-border-alt-color flex items-center justify-center rounded-full'>
                            <div className='w-[6.5rem] h-[6.5rem] rounded-full bg-dark-body-color text-dark-border-alt-color flex items-center justify-center'>
                                <FiUser size={'3rem'} />
                            </div>
                        </div>
                        {/* PPA */}
                        <div className='absolute phone:right-5 bottom-5 tablet:right-7 desktop:right-10'>
                            <div className={`${parseInt(data.ppa.match(/\d+/g)![0], 10) >= 51 ? 'bg-green-600' : 'bg-red-500'} px-3 phone:py-0.5 desktop:py-1 tablet:py-1 desktop:text-xl tablet:text-xl phone:text-lg text-dark-title-color font-medium rounded-md flex items-center justify-center gap-2`}>
                                <span>{parseInt(data.ppa.match(/\d+/g)![0], 10) >= 51 ? <FiTrendingUp size={'1rem'} /> : <FiTrendingDown size={'1rem'} />}</span> {data.ppa}
                            </div>
                        </div>
                    </div>

                    {/* Data de informacion */}
                    <div className='flex mt-4 w-full'>
                        <div className='text-start w-full'>
                            <h1 className='text-lg text-dark-title-color font-medium mb-1'>
                                {data.nombre_apellidos}
                            </h1>

                            <div className='flex phone:flex-col items-start gap-2 '>
                                <div className={`border-dark-border-alt-color flex items-center rounded-md text-sm text-dark-text-color/90 bg-dark-container-alt-color border px-4 py-1.5`}>
                                    Registro: {data.registro}
                                </div>

                                <div className={`border-dark-border-alt-color phone:w-full rounded-md text-sm text-dark-text-color/90 bg-dark-container-alt-color border px-4 py-1.5`}>
                                    {data.carrera}
                                </div>

                            </div>
                        </div>
                    </div>


                    {/* Tabla de materias */}
                    <div className='flex phone:flex-col justify-between w-full'>
                        <div className='border-t border-dark-border-alt-color pt-6 flex w-full'>
                            <section className="overflow-visible w-full">
                                <div className="rounded relative overflow-x-auto">
                                    <div className="inline-block min-w-full align-middle">
                                        <div className="table-container">
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th className="py-3 px-4 text-left">NIVEL</th>
                                                        <th className="py-3 px-4 text-left table-cell">MATERIA</th>
                                                        <th className="py-3 px-4 text-left table-cell">PERIODO</th>
                                                        <th className="py-3 px-4 text-left table-cell">NOTA</th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    {/* Data */}
                                                    {data && data.materias.map((materia, index) => (
                                                        <tr key={index + 1} className="relative hover:bg-dark-border-color transition-colors">
                                                            <td className="whitespace-nowrap">
                                                                <div className="flex">
                                                                    <span className="text-td">{materia.nivel}</span>
                                                                </div>
                                                            </td>
                                                            <td className="whitespace-nowrap">
                                                                <div className="flex items-center gap-2">
                                                                    <span className="text-td capitalize">{materia.materia}</span>
                                                                </div>
                                                            </td>
                                                            <td className="whitespace-nowrap">
                                                                <div className="flex items-center gap-2">
                                                                    <span className="text-td capitalize">{materia.periodo}</span>
                                                                </div>
                                                            </td>
                                                            <td className="whitespace-nowrap">
                                                                <div className={`bg-gray-600 flex rounded-md px-4 py-1 -my-2 items-center justify-center`}>
                                                                    <span className="text-td-alt capitalize">{materia.nota}</span>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))}

                                                    <tr>
                                                        <td colSpan={4}>
                                                            <nav className="flex items-center justify-between overflow-hidden">
                                                                <div className="block">
                                                                    <p className="text-xs text-td">
                                                                        Mostrando <span className="px-1 font-medium text-td-alt">{data && data.materias.length || 0}</span> de <span className="px-1 font-medium text-td-alt">{data && data.materias.length || 0}</span> resultados
                                                                    </p>
                                                                </div>
                                                            </nav>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
