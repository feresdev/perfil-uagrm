'use client'
import AsideAdmin from "../molecules/aside/AsideAdmin"
import HeaderAdmin from "../molecules/header/HeaderAdmin"

export default function LayoutAdmin({ children }: { children: React.ReactNode }) {
    return (
        <main className="admin">
            <AsideAdmin />
            <HeaderAdmin />
            {children}
        </main>
    )
};
