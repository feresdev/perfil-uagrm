import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Boleta de inscripción | Universidad Autónoma Gabriel René Moreno'
}

export default function LayoutBoletaRoot({ children, }: {
    children: React.ReactNode
}) {
    return (
        <main>
            {children}
        </main>
    )
};
