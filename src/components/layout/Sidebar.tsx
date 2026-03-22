"use client";

// O componente Sidebar é o menu de navegação principal da aplicação.
// Ele é posicionado ao lado esquerdo da tela por padrão, e pode se tornar um menu "hamburguer" no mobile.

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Sidebar() {
  const pathname = usePathname();

  // Função para verificar se o link está ativo
  const isActive = (path: string) => pathname === path;

  // Estilos base para os links
  const linkBaseClass = "px-4 py-3 rounded-lg transition-colors flex items-center";
  
  // Estilo para link ativo
  const activeClass = "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-100 font-medium";
  
  // Estilo para link inativo
  const inactiveClass = "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800";

  return (
    <aside className="w-64 hidden md:flex flex-col bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 h-screen transition-colors duration-200 p-4 sticky top-0">
      {/* Cabeçalho da Sidebar (Opcional, pode conter a logo) */}
      <div className="mb-8 px-2">
        <h2 className="text-xl font-bold text-blue-600 dark:text-blue-400 tracking-tight">
          GFP Admin
        </h2>
      </div>

      {/* Links de Navegação */}
      <nav className="flex flex-col space-y-2 flex-grow">
        <Link 
          href="/" 
          className={`${linkBaseClass} ${isActive("/") ? activeClass : inactiveClass}`}
        >
          <span>Home</span>
        </Link>
        <Link 
          href="/testes" 
          className={`${linkBaseClass} ${isActive("/testes") ? activeClass : inactiveClass}`}
        >
          <span>Testes</span>
        </Link>
        <Link 
          href="/configuracoes" 
          className={`${linkBaseClass} ${isActive("/configuracoes") ? activeClass : inactiveClass}`}
        >
          <span>Configurações</span>
        </Link>
      </nav>
    </aside>
  );
}
