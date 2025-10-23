import { useState, useRef } from 'react';
import { add } from './stringCalculator';

const App = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const resultRef = useRef<HTMLDivElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleCalculate = () => {
    setError(null);
    setResult(null);
    try {
      const value = add(input);
      setResult(value);
      setTimeout(() => resultRef.current?.focus(), 0);
    } catch (err: any) {
      setError(err.message || 'Invalid input!');
      setTimeout(() => textareaRef.current?.focus(), 0);
    }
  };

  return (
    <div
      style={{
        padding: '20px',
        backgroundColor: '#fff',
        color: '#333',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <img
        src="https://images.unsplash.com/photo-1594352161389-11756265d1b5?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        width={600}
        height={400}
        alt="Decorative image"
      />

      <h2>String Calculator</h2>

      <label htmlFor="numbers" style={{ display: 'block', marginTop: '10px' }}>
        Enter numbers
      </label>
      <textarea
        id="numbers"
        ref={textareaRef}
        style={{ margin: '10px 0', color: '#333', width: '100%', minHeight: '80px' }}
        placeholder="Enter numbers separated by comma or newline"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        aria-invalid={!!error}
        aria-describedby={error ? 'error-message' : undefined}
      />

      <button
        onClick={handleCalculate}
        style={{
          padding: '10px 20px',
          backgroundColor: '#008cba',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Calculate
      </button>

      {error && (
        <div
          id="error-message"
          role="alert"
          style={{ color: 'red', marginTop: '10px' }}
        >
          {error}
        </div>
      )}

      <div
        ref={resultRef}
        role="status"
        aria-live="polite"
        tabIndex={-1}
        style={{ marginTop: '15px', color: 'green' }}
      >
        {result !== null && <p>Result: {result}</p>}
      </div>
    </div>
  );
};

export default App;
