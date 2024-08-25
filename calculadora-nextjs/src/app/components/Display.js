// app/components/Display.js
export default function Display({ input, result }) {
    return (
      <div className="mb-3">
        <input
          type="text"
          className="form-control mb-2"
          value={input}
          readOnly
          placeholder="0"
          aria-label="Input"
        />
        <h2 className="text-center">{result}</h2>
      </div>
    );
  }
  