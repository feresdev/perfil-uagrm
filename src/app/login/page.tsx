'use client'
import LoginForm from '@/components/organisms/LoginForm';
import ToastComponent from '@/components/organisms/Toast';
import { useToast } from '@/hooks';
import Image from 'next/image';
import { Suspense } from 'react';

export default function Login() {
    return (
        <Suspense>
            <LoginContent />
        </Suspense>
    )
};

function LoginContent() {
    // Uso del hook del toast
    const { isToast, showToast } = useToast();
    const handleLogin = (title: string, status: boolean, description: string) => {
        showToast(title, description, status);
    }
    return (
        <div className='flex flex-row h-screen'>
            <main className='mx-auto desktop:flex-1 flex flex-col items-center py-16 px-5 desktop:border-r border-dark-border-color bg-dark-body-color'>
                <div className=' phone:w-[95%] desktop:w-[384px] tablet:w-[330px] desktop:justify-center tablet:justify-center flex-col flex flex-1'>
                    <div className="w-full py-6 justify-center flex">
                        <Image src={'/uagrm.webp'} width={300} height={1} priority alt="Logo Oficial" className="object-cover"></Image>
                    </div>
                    <div className="text-center mb-10">
                        <h1 className="mt-4 text-2xl text-dark-title-color">
                            Bienvenido otra vez !
                        </h1>
                        <h2 className="text-dark-text-color text-sm">
                            Inicia sesión en tu cuenta
                        </h2>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <div className='relative'>
                            <LoginForm onToast={handleLogin} />
                        </div>
                        <div className='mb-10 mt-4 text-center'>
                            <p className='text-xs text-dark-text-color phone:mx-auto phone:max-w-sm'>
                                Al continuar, es responsable de verificar de todos los registros y cambios que realize.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <aside className='desktop:flex-1 flex flex-col desktop:basis-1/4 items-center justify-center bg-dark-body-alt-color'>
            </aside>
            {/* El toast de notificacion */}
            <ToastComponent visible={isToast.visible} status={isToast.statusToast} title={isToast.titleToast} description={isToast.descriptionToast} />
        </div>
    )
};
