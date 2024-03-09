import LayoutAdmin from "@/components/layouts/LayoutAdmin"
import { Metadata } from "next"
import { GlobalContextProvider } from "../Context/GlobalContext"

export const metadata: Metadata = {
    title: 'Datos Personales | Universidad Autónoma Gabriel René Moreno'
}

export default function LayoutEstudiantesRoot({ children, }: {
    children: React.ReactNode
}) {
    return (
        <GlobalContextProvider>
            <LayoutAdmin>
                {children}
            </LayoutAdmin>
        </GlobalContextProvider>
    )
};
