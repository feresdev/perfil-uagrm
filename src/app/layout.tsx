import type { Metadata } from "next";
import LocalFont from "next/font/local";
import '../styles/globals.css'
import LayoutAdmin from "@/components/layouts/LayoutAdmin";

const circular = LocalFont({
  variable: '--font-circular',
  src: [
    {
      path: '../fonts/Circular/CustomFont-Book.woff2',
      weight: '400',
      style: 'normal',
    }, {
      path: '../fonts/Circular/CustomFont-Medium.woff2',
      weight: '500',
      style: 'normal'
    }, {
      path: '../fonts/Circular/CustomFont-Bold.woff2',
      weight: '700',
      style: '600'
    }, {
      path: '../fonts/Circular/CustomFont-Black.woff2',
      weight: '800',
      style: 'normal'
    }
  ]
});

export const metadata: Metadata = {
  title: "Universidad Autónoma Gabriel René Moreno",
  description: "Perfil en desarrollo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="es">
      <body className={`${circular.variable}`}>
          {children}
      </body>
    </html>
  );
}
