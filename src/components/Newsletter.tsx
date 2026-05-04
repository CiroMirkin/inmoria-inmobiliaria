'use client';

import { useState } from 'react';

const OPTIONS = [
  { id: 'todo', label: 'Todo' },
  { id: 'alquiler', label: 'Alquiler' },
  { id: 'venta', label: 'Venta' },
  { id: 'emprend', label: 'Emprend.' },
];

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [selected, setSelected] = useState<string[]>(['todo']);

  const handleToggle = (id: string) => {
    if (id === 'todo') {
      setSelected(['todo']);
    } else {
      const filtered = selected.filter((s) => s !== 'todo');
      if (filtered.length === 0 && id !== 'todo') {
        setSelected([id, 'todo']);
      } else if (selected.includes(id)) {
        const newSelected = filtered.length === 1 ? filtered.filter((s) => s !== id) : filtered;
        setSelected(newSelected.length === 0 ? ['todo'] : newSelected);
      } else {
        setSelected([...filtered, id]);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, categories: selected });
  };

  return (
    <form className="space-y-3" onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Tu email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-3 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-white/50"
      />
      <div className="flex flex-wrap gap-2">
        {OPTIONS.map((opt) => (
          <label
            key={opt.id}
            className={`chip cursor-pointer transition-colors ${
              selected.includes(opt.id) ? 'active border-white/30! bg-white/20!' : '!border-white/30/70'
            }`}
          >
            <input
              type="checkbox"
              className="sr-only"
              checked={selected.includes(opt.id)}
              onChange={() => handleToggle(opt.id)}
            />
            {opt.label}
          </label>
        ))}
      </div>
      <button type="submit" className="btn-acento w-full justify-center text-sm py-2.5">
        Suscribirme
      </button>
    </form>
  );
}