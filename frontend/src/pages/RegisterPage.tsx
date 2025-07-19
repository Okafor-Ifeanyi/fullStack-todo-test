// src/pages/Signup.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (res.ok) {
        alert('Signup successful');
        navigate('/');
      } else {
        alert(data.message || 'Signup failed');
      }
    } catch (err) {
      console.error(err);
      alert('An error occurred');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-6 rounded-xl bg-white p-8 shadow-xl">
        <h2 className="text-center text-2xl font-bold text-gray-800">Sign Up</h2>
        <input
          type="email"
          className="w-full rounded border border-gray-300 p-2"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          className="w-full rounded border border-gray-300 p-2"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="w-full rounded bg-green-600 p-2 font-semibold text-white hover:bg-green-700">
          Sign Up
        </button>
        <p className="text-center text-sm text-gray-600">
          Already have an account? <a href="/" className="text-blue-500 hover:underline">Log In</a>
        </p>
      </form>
    </div>
  );
}
