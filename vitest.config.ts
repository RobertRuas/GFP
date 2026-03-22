// Arquivo de configuração do Vitest, o framework de testes escolhido para o projeto.
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    // Configura o ambiente de testes como 'jsdom' para simular o DOM do navegador em Node.js
    environment: 'jsdom',
    // Permite que variáveis globais como `describe`, `it`, `expect` sejam usadas sem importação manual
    globals: true,
    // Arquivo de configuração que será rodado antes de cada suite de testes
    setupFiles: ['./vitest.setup.ts'],
  },
  resolve: {
    alias: {
      // Resolvemos o alias '@' do tsconfig.json para funcionar no Vitest de forma idêntica
      '@': path.resolve(__dirname, './src')
    }
  }
});
