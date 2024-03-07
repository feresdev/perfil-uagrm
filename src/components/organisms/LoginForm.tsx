'use client'
import React, { ChangeEvent, useState } from 'react';
import { HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi'
import { PiSpinnerBold } from 'react-icons/pi'
import Link from 'next/link';
import { validarVacio } from '../../utils/common/ValidarVacio';
import { useRouter, useSearchParams } from 'next/navigation';

interface ComponentsProps {
    onToast: (title: string, status: boolean, description: string) => void
}

export default function LoginForm({ onToast }: ComponentsProps) {

    const router = useRouter();
    const searchParams = useSearchParams();

    // Estados
    const [isMsg, setMsg] = useState({ username: '', password: '' });
    const [isViewPassword, setViewPassword] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [form, setForm] = useState({
        username: '',
        password: ''
    });

    // Funcion que meneja los cambios de los inputs
    const manejoCambios = (event: ChangeEvent<HTMLInputElement>) => {
        const { id, value } = event.target;

        if (id === 'username') {
            validarVacio(value, setMsg, id, 'El Código es requerido')
        }
        if (id === 'password') {
            validarVacio(value, setMsg, id, 'La contraseña es requerido');
        }

        setForm((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    // Funcion que ejecuta el envio del formulario
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setMsg({ username: '', password: '' })

        if (!validarVacio(form.username, setMsg, 'username', 'El Código es requerido')) {
            return;
        }

        if (!validarVacio(form.password, setMsg, 'password', 'La contraseña es requerido')) {
            return;
        }

        setLoading(true);
        // Se debe realizar la conexion a la API
        try {
            const response = await fetch('/api/v1/auth/login', {
                method: 'POST',
                body: JSON.stringify(form),
                credentials: 'same-origin',
                headers: {
                    "Content-Type": "application/json"
                }
            })
            if (!response.ok) {
                const res = await response.json();
                onToast(res.error.mensaje, false, res.error.detalles);
                return
            }
            onToast('Solicitud exitosa', true, 'Se inició sesion exitosamente');
            setTimeout(() => {
                const origin = searchParams.get('go');
                if (origin) {
                    router.push(origin);
                } else {
                    router.push('/')
                }
            }, 100)

        } catch (error: any) {
            onToast('Error en la solicitud', false, 'Problemas internos en el servidor. Contacte al administrador');
            console.error('Error en la solicitud:', error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form noValidate onSubmit={handleSubmit}>
            <div className='flex flex-col gap-4'>
                <div className='text-sm grid gap-2 desktop:grid desktop:grid-cols-12'>
                    <div className='flex flex-row space-x-2 justify-between col-span-12'>
                        <label className='block text-dark-text-color text-sm' htmlFor="username">Código de registro</label>
                    </div>
                    <div className='col-span-12'>
                        <div className='relative'>
                            <input onChange={manejoCambios} disabled={isLoading} autoComplete='username' type="number" id='username' name='username' placeholder='Código de registro' className={`${isMsg.username ? 'focus-visible:ring-red-900/60 border-red-900/80' : 'focus-visible:ring-dark-text-color/20 border-dark-border-alt-color'} no-spinners appearance-none peer/input block box-border w-full rounded-md shadow-sm transition-all text-dark-text-color focus-visible:shadow-md outline-none focus:ring-2  placeholder-dark-text-color/70  bg-dark-container-color border text-sm px-4 py-2`} />
                        </div>
                        <p className='text-sm pt-2 text-red-900 phone:mx-auto w-full'>
                            {isMsg.username ? isMsg.username : ''}
                        </p>
                    </div>
                </div>
                <div className='relative'>
                    <div className='text-sm grid gap-2 desktop:grid desktop:grid-cols-12'>
                        <div className='flex flex-row space-x-2 justify-between col-span-12'>
                            <label className='block text-dark-text-color text-sm' htmlFor="password">Contraseña</label>
                        </div>
                        <div className='col-span-12'>
                            <div className='relative'>
                                <input onChange={manejoCambios} disabled={isLoading} autoComplete='current-password' type={isViewPassword ? 'text' : 'password'} id='password' name='password' placeholder='••••••••••' className={`${isMsg.password ? 'focus-visible:ring-red-900/60 border-red-900/80' : 'focus-visible:ring-dark-text-color/20 border-dark-border-alt-color'} peer/input block box-border w-full rounded-md shadow-sm transition-all text-dark-text-color focus-visible:shadow-md outline-none focus:ring-2  placeholder-dark-text-color/70  bg-dark-container-color border text-sm px-4 py-2`} />
                                <div onClick={() => setViewPassword(!isViewPassword)} className='cursor-pointer text-dark-text-color'>
                                    {!isViewPassword ?
                                        <HiOutlineEyeOff size='1.1rem' className={`absolute mr-1.5 right-3 top-[-5%] translate-y-2/3`} /> :
                                        <HiOutlineEye size='1.1rem' className={`absolute mr-1.5 right-3 top-[-5%] translate-y-2/3`} />
                                    }
                                </div>
                            </div>
                            <p className='text-sm pt-2 text-red-900 phone:mx-auto w-full'>
                                {isMsg.password ? isMsg.password : ''}
                            </p>
                        </div>
                    </div>
                    <Link href='#' className='absolute top-0 right-0 text-sm text-dark-text-color'>¿Olvidaste tu contraseña?</Link>
                </div>
                <button type='submit' disabled={isLoading} className='flex text-dark-title-color text-center w-full items-center justify-center text-base space-x-2 px-4 py-2 mt-4 rounded-md bg-blue-600 border border-blue-500'>
                    {isLoading && <PiSpinnerBold size='1rem' className='animate-spin' />}
                    <span>{isLoading ? 'Iniciando Sesión' : 'Iniciar Sesión'}</span>
                </button>
            </div>
        </form>
    );
}
