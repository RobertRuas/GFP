// O componente Header fica na parte superior da aplicação.
// Ele mostrará o título da página ou sistema e opções do usuário (como avatar).

import React from "react";

export function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 transition-colors duration-200">
      {/* Lado esquerdo: Título da Aplicação */}
      <div className="flex items-center">
        {/* <h1 className="text-xl font-medium text-gray-800 dark:text-gray-100">
          GFP System
        </h1> */}
      </div>

      {/* Lado direito: Ações e Avatar do Usuário */}
      <div className="flex items-center space-x-4">
        <div className="w-10 h-10 rounded-full bg-blue-500 flex justify-center items-center text-white font-bold cursor-pointer hover:bg-blue-600 transition-colors">
          JD
        </div>
      </div>
    </header>
  );
}
