// O Content atua como um invólucro (wrapper) principal para o conteúdo dinâmico das páginas.
// Todo o sistema de rotas (children do Next.js) será injetado aqui dentro.

import React from "react";

interface ContentProps {
  children: React.ReactNode;
}

export function Content({ children }: ContentProps) {
  return (
    <main className="flex-1 overflow-auto bg-gray-100 dark:bg-gray-950 p-6 transition-colors duration-200">
      {/* O conteúdo dinâmico preenche o resto da tela graças ao flex-1 do contêiner maior */}
      <div className="mx-auto max-w-7xl h-full">
        {children}
      </div>
    </main>
  );
}
