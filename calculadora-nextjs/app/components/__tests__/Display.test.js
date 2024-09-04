// app/components/__tests__/Display.test.js
import { render, screen } from '@testing-library/react';
import Display from '../Display';

describe('Componente Display', () => {
  test('renderiza correctamente la entrada y el resultado', () => {
    render(<Display input="5+5" result="10" />);
    
    // Verifica que el valor de entrada sea "5+5"
    expect(screen.getByDisplayValue('5+5')).toBeInTheDocument();
    
    // Verifica que el resultado mostrado sea "10"
    expect(screen.getByText('10')).toBeInTheDocument();
  });

  test('muestra el placeholder cuando la entrada está vacía', () => {
    render(<Display input="" result="" />);
    
    // Verifica que el campo de entrada muestre el placeholder "0" cuando no hay valores
    expect(screen.getByPlaceholderText('0')).toBeInTheDocument();
  });
});
