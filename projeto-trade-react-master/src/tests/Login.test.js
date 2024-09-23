import { screen } from '@testing-library/react';

import { renderWithRouter } from './helpers/renderWithRouter';
import Login from '../pages/Login';

describe('Teste da tela de Login', () => {
  test('Se há um título na pagina de login', () => {
    renderWithRouter(<Login />);

    const title = screen.getByRole('heading', { name: /React/i, level: 1 });
    expect(title).toBeInTheDocument();
  });
  test('se há um input para digitar a key / token', () => {
    renderWithRouter(<Login />);

    const input = screen.getByPlaceholderText(/Digite sua key/i);
    expect(input).toBeInTheDocument();
  });
  test('se há um botão de login', () => {
    renderWithRouter(<Login />);

    const buttonLogin = screen.getByRole('button', { name: /Login/i });
    expect(buttonLogin).toBeInTheDocument();
  });
});
