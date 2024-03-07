'use client'
import { FiHash, FiUser } from 'react-icons/fi';
import { ErrorResponse } from '@/types/errorResponse';
import Img from '../../ImgOpacity';
import { Main } from '@/types/estudiantes';

interface ComponentsProps {
    estado: { data: Main | undefined | null, error: ErrorResponse | null | undefined, loading: boolean };
}

export default function DatosPersonalesForm({ estado: { data, error, loading } }: ComponentsProps) {
    return (
        <div>

            {/* Loading */}
            {loading && (
                <div className='flex flex-col gap-4'>

                    {/* Banner de fondo y logo */}
                    <div className='relative gap-2 bg-dark-border-color animate-pulse rounded-t-md -mx-5 -mt-5 h-36'>

                        <div className='-bottom-6 absolute ml-5 w-28 h-28 bg-dark-border-color border border-dark-border-alt-color flex items-center justify-center rounded-full'>
                            <div className='w-24 h-24 rounded-full bg-dark-body-color animate-pulse flex items-center justify-center'>
                            </div>
                        </div>
                        {/* Estado de acceso */}
                        <div className='absolute right-6 bottom-4'>
                            <div className={`px-4 py-0.5 bg-dark-container-color animate-pulse w-32 h-7 rounded-md flex justify-center items-center`}>
                            </div>
                        </div>
                    </div>

                    {/* Data de informacion */}
                    <div className='flex flex-col mt-4'>
                        <div className='h-6 w-3/4 bg-dark-border-color animate-pulse rounded-md mb-1'></div>
                        <div className='flex'>
                            <div className={` bg-dark-border-color animate-pulse h-5 w-1/2 rounded-md`}>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 justify-end'>
                        <div className='text-sm border-t border-dark-border-alt-color py-3 gap-2 flex flex-col'>
                            <div className='flex-col flex space-y-3'>
                                <div className='text-sm grid gap-1 desktop:grid desktop:grid-cols-12'>
                                    <div className='flex flex-row space-x-2 justify-between col-span-12'>
                                        <div className="h-4 w-1/2 bg-dark-border-color animate-pulse rounded-md"></div>
                                    </div>
                                    <div className='col-span-12'>
                                        <div className='relative'>
                                            <input disabled type="text" name='a' className={`bg-dark-border-color box-border w-full rounded-md outline-none animate-pulse px-4 py-1.5`} />
                                        </div>
                                    </div>
                                </div>
                                <div className='text-sm grid gap-1 desktop:grid desktop:grid-cols-12'>
                                    <div className='flex flex-row space-x-2 justify-between col-span-12'>
                                        <div className="h-4 w-1/2 bg-dark-border-color animate-pulse rounded-md"></div>
                                    </div>
                                    <div className='col-span-12'>
                                        <div className='relative'>
                                            <input disabled type="text" name='b' className={`bg-dark-border-color box-border w-full rounded-md outline-none animate-pulse px-4 py-1.5`} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex gap-2'>
                                <div className='text-sm grid gap-1 desktop:grid desktop:grid-cols-12'>
                                    <div className='flex flex-row space-x-2 justify-between col-span-12'>
                                        <div className="h-4 w-1/2 bg-dark-border-color animate-pulse rounded-md"></div>
                                    </div>
                                    <div className='col-span-12'>
                                        <div className='relative'>
                                            <input disabled type="text" name='c' className={`bg-dark-border-color box-border w-full rounded-md outline-none animate-pulse px-4 py-1.5`} />
                                        </div>
                                    </div>
                                </div>
                                <div className='text-sm grid gap-1 desktop:grid desktop:grid-cols-12'>
                                    <div className='flex flex-row space-x-2 justify-between col-span-12'>
                                        <div className="h-4 w-1/2 bg-dark-border-color animate-pulse rounded-md"></div>
                                    </div>
                                    <div className='col-span-12'>
                                        <div className='relative'>
                                            <input disabled type="text" name='d' className={`bg-dark-border-color box-border w-full rounded-md outline-none animate-pulse px-4 py-1.5`} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='text-sm grid gap-1 desktop:grid desktop:grid-cols-12'>
                                <div className='flex flex-row space-x-2 justify-between col-span-12'>
                                    <div className="h-4 w-1/2 bg-dark-border-color animate-pulse rounded-md"></div>
                                </div>
                                <div className='col-span-12'>
                                    <div className='relative'>
                                        <input disabled type="text" name='e' className={`bg-dark-border-color box-border w-full rounded-md outline-none animate-pulse px-4 py-1.5`} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Error */}
            {error && (
                <div>
                    <h1 className='text-sm text-dark-text-color'>
                        {error.error.detalles}
                    </h1>
                </div>
            )}

            {/* Data */}
            {data && (
                <div className='flex flex-col gap-4'>

                    {/* Banner de fondo y logo */}
                    <div className='relative gap-2 rounded-t-md phone:-mx-5 phone:-mt-5 tablet:-mt-7 tablet:-mx-7 desktop:-mx-10 desktop:-mt-10 phone:h-36 tablet:h-40 desktop:h-44 bg-blue-900'>
                        <Img
                            alt="Portadas UAGRM"
                            fill
                            className="aspect-video object-cover w-full flex rounded-t-md"
                            src="/portadaTwo.jpg">
                        </Img>

                        <div className='-bottom-6 absolute phone:ml-5 tablet:ml-7 desktop:ml-10 w-32 h-32 bg-dark-border-color border border-dark-border-alt-color flex items-center justify-center rounded-full'>
                            {data.estudent.Foto ?
                                <Img
                                    src={`${data.estudent.Foto}`}
                                    alt={data.estudent['Apellidos y Nombres']}
                                    fill
                                    className='w-[6rem] h-[6rem] rounded-full'>
                                </Img> :
                                <div className='w-[6.5rem] h-[6.5rem] rounded-full bg-dark-body-color text-dark-border-alt-color flex items-center justify-center'>
                                    <FiUser size={'3rem'} />
                                </div>}
                        </div>
                    </div>

                    {/* Data de informacion */}
                    <div className='flex flex-col text-start mt-4'>
                        <h1 className='text-lg text-dark-title-color font-medium mb-1'>
                            {data.estudent['Apellidos y Nombres']}
                        </h1>
                        <div className='flex'>
                            <p className={`gap-1 bg-blue-600 px-4 py-1 text-sm text-dark-title-color rounded-md flex justify-center items-center`}>
                                <FiHash size={'.9rem'} />Registro: {data.estudent.Registro}
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='text-sm border-t border-dark-border-alt-color pt-6'>

                            <div className='grid gap-3 phone:grid-cols-2 tablet:grid-cols-4 desktop:grid-cols-5'>

                                <div className='w-full space-y-1 phone:col-span-2'>
                                    <span className='text-dark-text-color/80'>Cédula de Identidad</span>
                                    <div className={`border-dark-border-alt-color w-full rounded-md text-dark-text-color/90 bg-dark-container-alt-color border px-4 py-1.5`}>
                                        {data.estudent['Cédula de Identidad']}
                                    </div>
                                </div>

                                <div className='w-full space-y-1'>
                                    <span className='text-dark-text-color/80'>Sexo</span>
                                    <div className={`border-dark-border-alt-color w-full rounded-md text-dark-text-color/90 bg-dark-container-alt-color border px-4 py-1.5`}>
                                        {data.estudent.Sexo}
                                    </div>
                                </div>

                                <div className='w-full space-y-1'>
                                    <span className='text-dark-text-color/80'>Estado Civil</span>
                                    <div className={`border-dark-border-alt-color w-full rounded-md text-dark-text-color/90 bg-dark-container-alt-color border px-4 py-1.5`}>
                                        {data.estudent['Estado Civil']}
                                    </div>
                                </div>

                                <div className='w-full space-y-1'>
                                    <span className='text-dark-text-color/80 truncate'>Fecha de Nacimiento</span>
                                    <div className={`border-dark-border-alt-color w-full rounded-md text-dark-text-color/90 bg-dark-container-alt-color border px-4 py-1.5`}>
                                        {data.estudent['Fecha de Nacimiento']}
                                    </div>
                                </div>

                                <div className='w-full space-y-1'>
                                    <span className='text-dark-text-color/80'>País</span>
                                    <div className={`border-dark-border-alt-color w-full rounded-md text-dark-text-color/90 bg-dark-container-alt-color border px-4 py-1.5`}>
                                        {data.estudent.País}
                                    </div>
                                </div>

                                <div className='w-full space-y-1 phone:col-span-2'>
                                    <span className='text-dark-text-color/80'>Departamento</span>
                                    <div className={`border-dark-border-alt-color w-full rounded-md text-dark-text-color/90 bg-dark-container-alt-color border px-4 py-1.5`}>
                                        {data.estudent.Departamento}
                                    </div>
                                </div>

                                <div className='w-full space-y-1 col-span-2'>
                                    <span className='text-dark-text-color/80'>Provincia</span>
                                    <div className={`border-dark-border-alt-color w-full rounded-md text-dark-text-color/90 bg-dark-container-alt-color border px-4 py-1.5`}>
                                        {data.estudent.Provincia}
                                    </div>
                                </div>

                                <div className='w-full space-y-1 col-span-2'>
                                    <span className='text-dark-text-color/80'>Dirección</span>
                                    <div className={`border-dark-border-alt-color w-full rounded-md text-dark-text-color/90 bg-dark-container-alt-color border px-4 py-1.5`}>
                                        {data.estudent.Dirección}
                                    </div>
                                </div>

                                <div className='w-full space-y-1 phone:col-span-2'>
                                    <span className='text-dark-text-color/80'>Nacionalidad</span>
                                    <div className={`border-dark-border-alt-color w-full rounded-md text-dark-text-color/90 bg-dark-container-alt-color border px-4 py-1.5`}>
                                        {data.estudent.Nacionalidad}
                                    </div>
                                </div>

                                <div className='w-full space-y-1'>
                                    <span className='text-dark-text-color/80'>Teléfono</span>
                                    <div className={`border-dark-border-alt-color w-full rounded-md text-dark-text-color/90 bg-dark-container-alt-color border px-4 py-1.5`}>
                                        {data.estudent.Teléfono}
                                    </div>
                                </div>

                                <div className='w-full space-y-1'>
                                    <span className='text-dark-text-color/80'>Celular</span>
                                    <div className={`border-dark-border-alt-color w-full rounded-md text-dark-text-color/90 bg-dark-container-alt-color border px-4 py-1.5`}>
                                        {data.estudent.Celular}
                                    </div>
                                </div>

                                <div className='w-full space-y-1 col-span-2'>
                                    <span className='text-dark-text-color/80'>Email</span>
                                    <div className={` truncate border-dark-border-alt-color w-full rounded-md text-dark-text-color/90 bg-dark-container-alt-color border px-4 py-1.5`}>
                                        {data.estudent.Email}
                                    </div>
                                </div>

                                <div className='w-full space-y-1 phone:col-span-2'>
                                    <span className='text-dark-text-color/80'>Periodo</span>
                                    <div className={`border-dark-border-alt-color w-full rounded-md text-dark-text-color/90 bg-dark-container-alt-color border px-4 py-1.5`}>
                                        {data.estudent.Periodo}
                                    </div>
                                </div>

                                <div className='w-full space-y-1 col-span-2'>
                                    <span className='text-dark-text-color/80'>Modalidad de Ingreso</span>
                                    <div className={`border-dark-border-alt-color w-full rounded-md text-dark-text-color/90 bg-dark-container-alt-color border px-4 py-1.5`}>
                                        {data.estudent['Modalidad de Ingreso']}
                                    </div>
                                </div>

                                <div className='w-full space-y-1'>
                                    <span className='text-dark-text-color/80'>Tipo de Sangre</span>
                                    <div className={`border-dark-border-alt-color w-full rounded-md text-dark-text-color/90 bg-dark-container-alt-color border px-4 py-1.5`}>
                                        {data.estudent['Tipo de Sangre']}
                                    </div>
                                </div>

                                <div className='w-full space-y-1'>
                                    <span className='text-dark-text-color/80'>Título de Bachiller</span>
                                    <div className={`border-dark-border-alt-color w-full rounded-md text-dark-text-color/90 bg-dark-container-alt-color border px-4 py-1.5`}>
                                        {data.estudent['Título de Bachiller']}
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
