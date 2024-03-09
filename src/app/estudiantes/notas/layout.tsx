import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Consulta de notas | Universidad Autónoma Gabriel René Moreno'
}

export default function LayoutNotasRoot({ children, }: {
    children: React.ReactNode
}) {
    return (
        <main>
            {children}
        </main>
    )
};
