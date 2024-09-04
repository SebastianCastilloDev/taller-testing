// app/components/__tests__/ButtonPanel.test.js
import { render, screen } from '@testing-library/react';
import ButtonPanel from '../ButtonPanel';

describe('Componente ButtonPanel', () => {
  test('renderiza todos los botones correctamente', () => {
    render(<ButtonPanel onButtonClick={() => {}} onClear={() => {}} onCalculate={() => {}} />);
    
    // Verifica que los botones "1", "2", "3", "+", "C" y "=" estén presentes en el documento
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('+')).toBeInTheDocument();
    expect(screen.getByText('C')).toBeInTheDocument();
    expect(screen.getByText('=')).toBeInTheDocument();
  });
});
