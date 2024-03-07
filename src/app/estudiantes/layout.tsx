import LayoutAdmin from "@/components/layouts/LayoutAdmin"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Datos Personales | Universidad Autónoma Gabriel René Moreno'
}

export default function LayoutEstudiantesRoot({ children, }: {
    children: React.ReactNode
}) {
    return (
        <LayoutAdmin>
            {children}
        </LayoutAdmin>
    )
};
