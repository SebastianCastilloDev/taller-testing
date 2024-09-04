// app/components/__tests__/Display.test.js
import { render, screen } from '@testing-library/react';
import Display from '../Display';

describe('Display', () => {
  test('renders input and result correctly', () => {
    render(<Display input="5+5" result="10" />);
    expect(screen.getByDisplayValue('5+5')).toBeInTheDocument();
    expect(screen.getByText('10')).toBeInTheDocument();
  });

  test('shows placeholder when input is empty', () => {
    render(<Display input="" result="" />);
    expect(screen.getByPlaceholderText('0')).toBeInTheDocument();
  });
});
