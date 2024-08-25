// app/components/Button.js
export default function Button({ label, onClick, className = 'btn-dark' }) {
    return (
      <button
        className={`btn ${className} m-1`}
        onClick={() => onClick(label)}
        style={{ width: '60px', height: '60px' }}
      >
        {label}
      </button>
    );
  }
  