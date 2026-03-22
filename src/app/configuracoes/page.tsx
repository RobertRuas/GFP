// Esta rota é renderizada em /configuracoes acessível pelo Sidebar.

import React from "react";

export default function ConfiguracoesPage() {
  return (
    <div className="max-w-4xl">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
        <h2 className="text-2xl font-bold mb-6 border-b pb-4 border-gray-200 dark:border-gray-700">
          Configurações do Sistema
        </h2>
        
        <form className="space-y-6">
          {/* Sessão de Dados de Perfil Demonstrativa */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Nome de Usuário
            </label>
            <input 
              type="text" 
              readOnly 
              value="John Doe" 
              className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-4 py-2" 
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Notificações por Email
            </label>
            <select className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-4 py-2">
              <option>Ativadas</option>
              <option>Desativadas</option>
            </select>
          </div>

          {/* O formulário aqui é estrutural apenas como representação didática de UI */}
          <div className="pt-4 flex justify-end">
            <button 
              type="button" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors font-medium shadow-sm"
            >
              Salvar Alterações
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
