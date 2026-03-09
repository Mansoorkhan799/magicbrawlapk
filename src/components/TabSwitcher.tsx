'use client';

import { useState } from 'react';

type Tab = { id: string; label: string; content: React.ReactNode };

export default function TabSwitcher({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(tabs[0]?.id ?? '');

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2 p-1 bg-[#0A1029] rounded-xl border border-gray-700/50">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`px-5 py-2.5 rounded-lg font-semibold transition-all duration-300 ${
              active === tab.id
                ? 'bg-[#0ea5e9] text-white shadow-lg shadow-[#0ea5e9]/25'
                : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="animate-fade-in">
        {tabs.find((t) => t.id === active)?.content}
      </div>
    </div>
  );
}
