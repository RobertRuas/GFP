// O componente Footer serve para mostrar as informações de direitos autorais ou links úteis minimalistas.
// Ele sempre se posiciona na base da aplicação.

import React from "react";

export function Footer() {
  return (
    <footer className="py-4 px-6 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-center transition-colors duration-200">
      <p className="text-sm text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} GFP System. Todos os direitos reservados.
      </p>
    </footer>
  );
}
