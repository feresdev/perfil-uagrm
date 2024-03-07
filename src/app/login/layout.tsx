import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Iniciar sesión | Universidad Autónoma Gabriel René Moreno'
}

export default function LayoutLogin({ children, }: {
    children: React.ReactNode
}) {
    return (
        <div className="flex flex-col">
            {children}
        </div>
    )
};
