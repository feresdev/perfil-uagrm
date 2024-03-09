import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Histórico | Universidad Autónoma Gabriel René Moreno'
}

export default function LayoutHistoricoRoot({ children, }: {
    children: React.ReactNode
}) {
    return (
        <main>
            {children}
        </main>
    )
};
