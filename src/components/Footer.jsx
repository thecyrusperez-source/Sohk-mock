import React from 'react';
import Logo from './Logo.jsx';

const COLS = [
  {
    head: 'Train',
    items: ['Youth Boxing', 'Competition Team', 'Private Lessons', 'Fitness Boxing'],
  },
  {
    head: 'Gym',
    items: ['Coach', 'Schedule', 'The Dogs', 'Visit Us'],
  },
  {
    head: 'Shop',
    items: ['Apparel', 'Gear', 'Gift Cards', 'Returns'],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#050505] pt-24 pb-10">
      <div className="container-x">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10 md:gap-6">
          <div className="md:col-span-4">
            <a href="#hero" className="block w-32 mb-6" aria-label="SOHK">
              <Logo mono="light" />
            </a>
            <p className="text-pearl/55 text-[13.5px] leading-relaxed max-w-xs">
              School of Hard Knocks. Built fighters. Built different. Since
              every champion was once a beginner.
            </p>
          </div>

          {COLS.map((c) => (
            <div key={c.head} className="md:col-span-2">
              <p className="nav-link text-pearl/40 text-[10px] mb-4">{c.head}</p>
              <ul className="space-y-2.5">
                {c.items.map((it) => (
                  <li key={it}>
                    <a href="#" className="text-pearl/75 text-[14px] hover:text-pearl transition-colors">
                      {it}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-2">
            <p className="nav-link text-pearl/40 text-[10px] mb-4">Visit</p>
            <p className="text-pearl/75 text-[14px] leading-relaxed">
              42 Knockout Ave
              <br />
              Brooklyn, NY 11201
              <br />
              (212) 555&ndash;0420
            </p>
          </div>
        </div>

        <div className="hairline my-12" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-pearl/40 text-[12px]">
            © {new Date().getFullYear()} School of Hard Knocks. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-pearl/55 text-[12px]">
            <a href="#" className="hover:text-pearl transition-colors">Instagram</a>
            <a href="#" className="hover:text-pearl transition-colors">YouTube</a>
            <a href="#" className="hover:text-pearl transition-colors">TikTok</a>
            <a href="#" className="hover:text-pearl transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
