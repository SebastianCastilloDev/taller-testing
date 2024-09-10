import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from '../Calculator';

describe('Test de regresión para el componente Calculator', () => {
  test('procesa correctamente una operación aritmética básica', () => {
    render(<Calculator />);
    
    // Simula la secuencia de botones para la operación "5 + 5 ="
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('='));
    
    // Verifica que el resultado sea "10"
    const result = screen.getByRole('heading', { level: 2 });
    expect(result).toHaveTextContent('10');
  });

  test('muestra error en caso de expresión inválida', () => {
    render(<Calculator />);
    
    // Simula una operación inválida
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('='));
    
    // Verifica que se muestre el mensaje de error
    const result = screen.getByRole('heading', { level: 2 });
    expect(result).toHaveTextContent('Error');
  });

  test('limpia la pantalla correctamente', () => {
    render(<Calculator />);
    
    // Simula entrada de datos y limpieza
    fireEvent.click(screen.getByText('9'));
    fireEvent.click(screen.getByText('C'));
    
    // Verifica que la pantalla esté limpia
    const inputField = screen.getByPlaceholderText('0');
    expect(inputField.value).toBe('');
  });
});
