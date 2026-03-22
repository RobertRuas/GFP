// Este arquivo contém testes simples focados no componente visual Header.
// O Vitest rodará este arquivo sempre que executarmos o script `npm run test`

import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Header } from './Header';

describe('Header Component', () => {
  it('deve renderizar o título da aplicação corretamente', () => {
    // Renderiza o componente na DOM virtual construída pelo jsdom
    render(<Header />);
    
    // Busca pelo texto exato e garante que ele está presente na tela
    const titleElement = screen.getByText('GFP System');
    expect(titleElement).toBeInTheDocument();
  });

  it('deve renderizar as iniciais do usuário no avatar', () => {
    render(<Header />);
    
    // Verifica a presença do avatar padrão 'JD'
    const avatarElement = screen.getByText('JD');
    expect(avatarElement).toBeInTheDocument();
  });
});
