import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

// Importando os componentes de layout
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { Content } from "@/components/layout/Content";
import { Footer } from "@/components/layout/Footer";

// Configuração da fonte Roboto, priorizando o peso 300 conforme requisitado
const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GFP System",
  description: "Arquitetura profissional de aplicação Next.js - GFP",
};

// O RootLayout é o layout global que engloba todas as páginas do sistema.
// Ele injeta o cabeçalho (Header), a barra lateral (Sidebar) e o rodapé (Footer).
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${roboto.variable} h-full antialiased`}
    >
      <body className="font-sans min-h-full flex transition-colors duration-200">
        {/* Navegação fixa na esquerda oupando 100% da altura */}
        <Sidebar />

        {/* Área da direita: Cabeçalho + Conteúdo + Rodapé */}
        <div className="flex flex-col flex-1 min-h-screen overflow-hidden">
          {/* Cabeçalho superior agora apenas na área de conteúdo */}
          <Header />
          
          <div className="flex flex-col flex-1 w-full relative overflow-y-auto">
            <Content>{children}</Content>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
