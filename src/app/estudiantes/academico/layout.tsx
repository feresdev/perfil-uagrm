import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Avance académico | Universidad Autónoma Gabriel René Moreno'
}

export default function LayoutAcademicoRoot({ children, }: {
    children: React.ReactNode
}) {
    return (
        <main>
            {children}
        </main>
    )
};
