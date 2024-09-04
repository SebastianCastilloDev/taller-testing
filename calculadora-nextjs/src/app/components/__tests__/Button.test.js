// app/components/__tests__/Button.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../Button';

describe('Button', () => {
  test('renders button with label', () => {
    render(<Button label="1" onClick={() => {}} />);
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  test('calls onClick when button is clicked', () => {
    const handleClick = jest.fn();
    render(<Button label="1" onClick={handleClick} />);
    const button = screen.getByText('1');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledWith('1');
  });
});
