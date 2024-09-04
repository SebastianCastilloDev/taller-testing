// app/components/__tests__/Button.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../Button';

describe('Componente Button', () => {
  test('renderiza correctamente el botón con la etiqueta', () => {
    render(<Button label="1" onClick={() => {}} />);
    // Verifica que el botón con el texto "1" esté presente en el documento
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  test('llama a la función onClick cuando se hace clic en el botón', () => {
    const handleClick = jest.fn();
    render(<Button label="1" onClick={handleClick} />);
    const button = screen.getByText('1');
    
    // Simula un clic en el botón
    fireEvent.click(button);
    
    // Verifica que la función handleClick haya sido llamada con el argumento "1"
    expect(handleClick).toHaveBeenCalledWith('1');
  });
});
