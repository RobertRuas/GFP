// Esta é a rota acessível via /testes.
// Pode ser utilizada futuramente para testes automatizados ou verificação de novos componentes isolados.

import React from "react";

export default function TestesPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold mb-4">Área de Testes</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Utilize esse ambiente para testar formulários, interações visuais e validações antes de integrá-las à produção real.
        </p>

        {/* Exemplo de botão de formulário para teste visual */}
        <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors shadow-sm">
          Simular Ação
        </button>
      </div>
    </div>
  );
}
