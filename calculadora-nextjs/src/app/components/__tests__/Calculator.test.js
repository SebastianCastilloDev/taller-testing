// app/components/__tests__/Calculator.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from '../Calculator';

describe('Calculator', () => {
  test('renders correctly', () => {
    render(<Calculator />);
    expect(screen.getByText('Calculadora')).toBeInTheDocument();
  });

  test('handles input and displays result', () => {
    render(<Calculator />);
    const oneButton = screen.getByText('1');
    const twoButton = screen.getByText('2');
    const addButton = screen.getByText('+');
    const equalsButton = screen.getByText('=');

    fireEvent.click(oneButton);
    fireEvent.click(addButton);
    fireEvent.click(twoButton);
    fireEvent.click(equalsButton);

    expect(screen.getByText('3')).toBeInTheDocument();
  });

  test('handles clear button', () => {
    render(<Calculator />);
    const oneButton = screen.getByText('1');
    const clearButton = screen.getByText('C');

    fireEvent.click(oneButton);
    fireEvent.click(clearButton);

    expect(screen.getByPlaceholderText('0').value).toBe('');
    expect(screen.queryByText('1')).not.toBeInTheDocument();
  });

  test('handles invalid expressions gracefully', () => {
    render(<Calculator />);
    const oneButton = screen.getByText('1');
    const addButton = screen.getByText('+');
    const equalsButton = screen.getByText('=');

    fireEvent.click(oneButton);
    fireEvent.click(addButton);
    fireEvent.click(equalsButton);

    expect(screen.getByText('Error')).toBeInTheDocument();
  });
});
