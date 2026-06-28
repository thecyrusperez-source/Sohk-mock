import React from 'react';
import Reveal from './Reveal.jsx';

const TODAY = [
  { time: '6:30 AM', name: 'Sunrise Fitness Boxing', coach: 'Coach Diaz', spots: '3 left' },
  { time: '9:00 AM', name: 'Youth Fundamentals', coach: 'Coach Marquez', spots: 'Open' },
  { time: '12:00 PM', name: 'Lunch Round', coach: 'Coach Diaz', spots: '5 left' },
  { time: '5:30 PM', name: 'Competition Team', coach: 'Coach Marquez', spots: 'Invite' },
  { time: '7:00 PM', name: 'Open Sparring', coach: 'Coach Reed', spots: '2 left' },
];

export default function Schedule() {
  const today = new Date().toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' });
  return (
    <section id="schedule" className="relative py-32 md:py-44 bg-[#070707] overflow-hidden">
      <div className="container-x">
        <div className="mb-14 md:mb-20 max-w-2xl">
          <Reveal>
            <p className="nav-link text-pearl/50 mb-5">— Schedule</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display-tight text-pearl text-[12vw] sm:text-[8vw] md:text-[6vw] lg:text-[5.2vw] leading-[0.9]">
              SHOW UP.
              <br />
              <span className="text-pearl/55">EVERY DAY.</span>
            </h2>
          </Reveal>
        </div>

        <Reveal y={40}>
          <div className="glass rounded-[2rem] p-6 md:p-10 shadow-glass">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <p className="nav-link text-pearl/50 text-[10px]">Today</p>
                <p className="display-tight text-pearl text-3xl md:text-4xl mt-1">{today}</p>
              </div>
              <a
                href="#"
                className="nav-link text-pearl/80 hover:text-pearl transition-colors inline-flex items-center gap-2"
              >
                Full week →
              </a>
            </div>

            <ul className="divide-y divide-pearl/[0.06]">
              {TODAY.map((c) => (
                <li key={c.time} className="py-4 md:py-5 grid grid-cols-12 gap-3 items-center">
                  <span className="display-tight text-pearl text-2xl md:text-3xl col-span-3 md:col-span-2">
                    {c.time}
                  </span>
                  <div className="col-span-9 md:col-span-7">
                    <p className="text-pearl text-[15px] md:text-base font-medium">{c.name}</p>
                    <p className="text-pearl/55 text-[12px] mt-0.5">{c.coach}</p>
                  </div>
                  <div className="col-span-12 md:col-span-3 flex md:justify-end items-center gap-3">
                    <span className={`nav-link text-[10px] ${c.spots === 'Open' ? 'text-pearl/60' : c.spots === 'Invite' ? 'text-pearl/35' : 'text-blueFire'}`}>
                      {c.spots}
                    </span>
                    <a
                      href="#"
                      className="ml-auto md:ml-0 inline-flex items-center justify-center rounded-full border border-pearl/20 hover:bg-pearl hover:text-ink hover:border-pearl transition-all px-4 py-2 nav-link text-[10px]"
                    >
                      Book
                    </a>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 rounded-2xl bg-pearl/[0.03] p-5 md:p-6 border border-pearl/[0.05]">
              <div>
                <p className="display-tight text-pearl text-2xl md:text-3xl">First class on us.</p>
                <p className="text-pearl/60 text-[13.5px] mt-1">Book a free trial. No gear required.</p>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-pearl text-ink px-6 py-3 nav-link hover:bg-pearl/90 transition-colors"
              >
                Book Trial →
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
