'use client'
import { useState } from 'react'

export default function Home() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('http://localhost:8000/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ prompt })
    });
    const data = await res.json();
    setResponse(data.response);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>GenAI Prompt App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your prompt"
          style={{ width: '300px', marginRight: '10px' }}
        />
        <button type="submit">Generate</button>
      </form>
      {response && <p style={{ marginTop: '20px' }}><strong>Response:</strong> {response}</p>}
    </div>
  )
}
