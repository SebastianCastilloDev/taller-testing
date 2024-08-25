// app/components/ButtonPanel.js
import Button from './Button';

export default function ButtonPanel({ onButtonClick, onClear, onCalculate }) {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <Button label="C" onClick={onClear} className="btn-danger" />
        <Button label="=" onClick={onCalculate} className="btn-primary" />
      </div>
      <div className="d-flex justify-content-center">
        <Button label="1" onClick={onButtonClick} />
        <Button label="2" onClick={onButtonClick} />
        <Button label="3" onClick={onButtonClick} />
        <Button label="+" onClick={onButtonClick} className="btn-secondary" />
      </div>
      <div className="d-flex justify-content-center">
        <Button label="4" onClick={onButtonClick} />
        <Button label="5" onClick={onButtonClick} />
        <Button label="6" onClick={onButtonClick} />
        <Button label="-" onClick={onButtonClick} className="btn-secondary" />
      </div>
      <div className="d-flex justify-content-center">
        <Button label="7" onClick={onButtonClick} />
        <Button label="8" onClick={onButtonClick} />
        <Button label="9" onClick={onButtonClick} />
        <Button label="*" onClick={onButtonClick} className="btn-secondary" />
      </div>
      <div className="d-flex justify-content-center">
        <Button label="0" onClick={onButtonClick} />
        <Button label="." onClick={onButtonClick} />
        <Button label="/" onClick={onButtonClick} className="btn-secondary" />
      </div>
    </div>
  );
}
