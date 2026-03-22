// Esta é a página inicial (Home) que será renderizada na raiz (/) do site.
// No Next.js App Router, o arquivo page.tsx define o conteúdo da URL correspondente.

import React from "react";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-6 w-full h-full">
      {/* Título de Boas-vindas */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
        <h2 className="text-2xl font-bold mb-2">Bem-vindo ao GFP System</h2>
        <p className="text-gray-600 dark:text-gray-300">
          Esta é a sua página inicial. Todas as informações principais do painel
          podem ser vistas aqui. A arquitetura está montada para ser expansível.
        </p>
      </div>

      {/* Grid de Informações (Mocks) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
          <h3 className="text-lg font-semibold mb-1">Usuários Ativos</h3>
          <p className="text-3xl font-bold text-blue-600">1,245</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
          <h3 className="text-lg font-semibold mb-1">Receita Mensal</h3>
          <p className="text-3xl font-bold text-green-600">R$ 45.200</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
          <h3 className="text-lg font-semibold mb-1">Alertas</h3>
          <p className="text-3xl font-bold text-red-600">3</p>
        </div>
      </div>
    </div>
  );
}
