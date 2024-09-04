// app/components/__tests__/Calculator.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from '../Calculator';

describe('Componente Calculator', () => {
  test('renderiza correctamente la calculadora con el título', () => {
    render(<Calculator />);
    
    // Verifica que el texto "Calculadora" esté presente en el documento
    expect(screen.getByText('Calculadora')).toBeInTheDocument();
  });

  test('procesa correctamente la entrada de números y muestra el resultado', () => {
    render(<Calculator />);
    
    // Obtiene los botones "1", "2", "+" y "="
    const oneButton = screen.getByText('1');
    const twoButton = screen.getByText('2');
    const addButton = screen.getByText('+');
    const equalsButton = screen.getByText('=');
  
    // Simula las acciones de presionar los botones "1", "+", "2" y "="
    fireEvent.click(oneButton);
    fireEvent.click(addButton);
    fireEvent.click(twoButton);
    fireEvent.click(equalsButton);
  
    // Verifica que el resultado mostrado sea "3"
    const result = screen.getByRole('heading', { level: 2 });
    expect(result).toHaveTextContent('3');
  });

  test('limpia el campo de entrada cuando se presiona el botón "C"', () => {
    render(<Calculator />);
    
    const oneButton = screen.getByText('1');
    const clearButton = screen.getByText('C');
  
    // Simula la acción de presionar "1" y luego "C" para limpiar
    fireEvent.click(oneButton);
    fireEvent.click(clearButton);
  
    // Verifica que el campo de entrada esté vacío después de presionar "C"
    expect(screen.getByPlaceholderText('0').value).toBe('');
  });

  test('maneja expresiones inválidas mostrando un mensaje de error', () => {
    render(<Calculator />);
    
    const oneButton = screen.getByText('1');
    const addButton = screen.getByText('+');
    const equalsButton = screen.getByText('=');
    
    // Simula las acciones de presionar "1", "+" y "=" sin completar la operación
    fireEvent.click(oneButton);
    fireEvent.click(addButton);
    fireEvent.click(equalsButton);

    // Verifica que se muestre el mensaje de error
    expect(screen.getByText('Error')).toBeInTheDocument();
  });
});
