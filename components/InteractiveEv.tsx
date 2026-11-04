'use client';

import { useEffect, useRef, useState } from 'react';

// Decorative hero visual: an EV whose battery pack streams data to the cloud and a phone.
// No controls or copy on purpose. It only reacts to the pointer (tilt) and highlights each part in turn.
type PartId = 'pack' | 'device' | 'app' | 'cloud';
const order: PartId[] = ['pack', 'device', 'cloud', 'app'];
const CELLS = 12;
const glow = 'drop-shadow(0 0 8px rgba(45,122,253,0.8))';

export default function InteractiveEv() {
  const [active, setActive] = useState<PartId>('pack');
  const [soc, setSoc] = useState(30);
  const holder = useRef<HTMLDivElement>(null);
  const hovered = useRef(false);

  useEffect(() => {
    const t = setInterval(() => setSoc((s) => (s >= 99 ? 18 : s + 0.6)), 110);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => {
      if (!hovered.current) setActive((a) => order[(order.indexOf(a) + 1) % order.length]);
    }, 3200);
    return () => clearInterval(t);
  }, []);

  const onMove = (e: React.PointerEvent) => {
    const el = holder.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.5) * 2;
    const y = ((e.clientY - r.top) / r.height - 0.5) * 2;
    el.style.setProperty('--rx', `${(-y * 4).toFixed(2)}deg`);
    el.style.setProperty('--ry', `${(x * 6).toFixed(2)}deg`);
  };
  const onLeave = () => {
    holder.current?.style.setProperty('--rx', '0deg');
    holder.current?.style.setProperty('--ry', '0deg');
  };

  const filled = Math.round((soc / 100) * CELLS);
  const part = (id: PartId) => ({
    filter: active === id ? glow : undefined,
    opacity: active === id ? 1 : 0.88,
    transition: 'opacity .4s, filter .4s',
    cursor: 'pointer',
  });
  const hover = (id: PartId) => ({
    onPointerEnter: () => { hovered.current = true; setActive(id); },
    onPointerLeave: () => { hovered.current = false; },
  });

  return (
    <div ref={holder} onPointerMove={onMove} onPointerLeave={onLeave} className="w-full select-none">
      <div style={{ transform: 'perspective(1100px) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg))', transition: 'transform .25s ease-out' }}>
        <svg viewBox="40 10 590 330" className="w-full h-auto overflow-visible" role="img" aria-label="Electric vehicle streaming battery data to the cloud and a phone">
          <defs>
            <linearGradient id="iev-body" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#ffffff" />
              <stop offset="1" stopColor="#d9e7ff" />
            </linearGradient>
            <linearGradient id="iev-road" gradientUnits="userSpaceOnUse" x1="40" y1="0" x2="630" y2="0">
              <stop offset="0" stopColor="#9db9ee" stopOpacity="0" />
              <stop offset="0.25" stopColor="#9db9ee" stopOpacity="1" />
              <stop offset="0.75" stopColor="#9db9ee" stopOpacity="1" />
              <stop offset="1" stopColor="#9db9ee" stopOpacity="0" />
            </linearGradient>
            <path id="iev-l1" d="M146 238 C146 150 222 96 296 84" fill="none" />
            <path id="iev-l2" d="M352 70 C420 46 500 66 556 94" fill="none" />
            <path id="iev-l3" d="M222 252 L166 248" fill="none" />
          </defs>

          {/* road */}
          <ellipse cx="300" cy="308" rx="215" ry="9" fill="#0b2a63" opacity="0.14" />
          <line x1="40" y1="312" x2="630" y2="312" stroke="url(#iev-road)" strokeWidth="3" strokeDasharray="26 38" className="ev-road" />

          {/* data links */}
          {['iev-l1', 'iev-l2', 'iev-l3'].map((id) => (
            <use key={id} href={`#${id}`} stroke="#2D7AFD" strokeOpacity="0.5" strokeWidth="1.8" strokeDasharray="4 8" className="ev-flow" />
          ))}
          {['#iev-l1', '#iev-l2', '#iev-l3'].map((h, i) => (
            <circle key={h} r="4.4" fill="#2D7AFD">
              <animateMotion dur={`${2.2 + i * 0.4}s`} repeatCount="indefinite"><mpath href={h} /></animateMotion>
            </circle>
          ))}

          {/* car */}
          <g className="ev-car">
            <path
              d="M104 270 L104 246 Q104 232 122 227 L190 217 Q214 176 256 164 L366 162 Q406 168 430 214 L464 224 Q486 230 486 250 L486 270 Z"
              fill="url(#iev-body)" stroke="#1456c7" strokeWidth="3" strokeLinejoin="round"
            />
            <path d="M222 214 Q240 184 270 174 L304 172 L304 214 Z" fill="#cfe2ff" stroke="#1456c7" strokeWidth="1.6" />
            <path d="M314 172 L362 172 Q392 180 410 214 L314 214 Z" fill="#cfe2ff" stroke="#1456c7" strokeWidth="1.6" />
            <rect x="470" y="238" width="18" height="8" rx="3" fill="#ffd36b" />
            <rect x="104" y="238" width="12" height="8" rx="3" fill="#ff8a8a" />
            {[184, 404].map((cx) => (
              <g key={cx}>
                <circle cx={cx} cy="272" r="38" fill="#eaf2ff" />
                <circle cx={cx} cy="272" r="33" fill="#0b2a63" />
                <g className="ev-wheel">
                  <circle cx={cx} cy="272" r="20" fill="none" stroke="#9fc1ff" strokeWidth="2.4" />
                  {[0, 60, 120].map((a) => (
                    <line key={a} x1={cx - 20} y1="272" x2={cx + 20} y2="272" stroke="#9fc1ff" strokeWidth="2.4" strokeLinecap="round" transform={`rotate(${a} ${cx} 272)`} />
                  ))}
                </g>
                <circle cx={cx} cy="272" r="6" fill="#2D7AFD" stroke="#fff" strokeWidth="2" />
              </g>
            ))}
          </g>

          {/* battery pack */}
          <g style={part('pack')} {...hover('pack')}>
            <rect x="222" y="244" width="162" height="28" rx="8" fill="#0b2a63" />
            {Array.from({ length: CELLS }).map((_, i) => (
              <rect key={i} x={229 + i * 12.5} y="249" width="9" height="18" rx="2.5" fill={i < filled ? '#5eead4' : '#27437c'} style={{ transition: 'fill .2s' }} />
            ))}
          </g>

          {/* device */}
          <g style={part('device')} {...hover('device')}>
            <rect x="128" y="236" width="34" height="24" rx="5" fill="#111827" stroke="#2D7AFD" strokeWidth="1.4" />
            <circle cx="138" cy="248" r="2.2" fill="#5eead4" className="ev-cell" />
            <circle cx="146" cy="248" r="2.2" fill="#2D7AFD" className="ev-cell" style={{ animationDelay: '.5s' }} />
          </g>

          {/* cloud */}
          <g style={part('cloud')} {...hover('cloud')}>
            <g className="ev-float">
              <g transform="translate(288 34) scale(2.9)">
                <path d="M7 18a4.5 4.5 0 0 1-.6-8.96A6 6 0 0 1 18 9.5a4 4 0 0 1-.5 8.5H7Z" fill="#eaf2ff" stroke="#2D7AFD" strokeWidth="1.1" strokeLinejoin="round" />
              </g>
            </g>
          </g>

          {/* phone */}
          <g style={part('app')} {...hover('app')}>
            <g className="ev-float" style={{ animationDelay: '.8s' }}>
              <rect x="542" y="40" width="62" height="116" rx="12" fill="#111827" />
              <rect x="546" y="44" width="54" height="108" rx="9" fill="#fff" />
              <rect x="565" y="47" width="16" height="4" rx="2" fill="#111827" />
              <circle cx="573" cy="82" r="17" fill="none" stroke="#e5edff" strokeWidth="6" />
              <circle
                cx="573" cy="82" r="17" fill="none" stroke="#2D7AFD" strokeWidth="6" strokeLinecap="round"
                strokeDasharray={`${(107 * soc) / 100} 107`} transform="rotate(-90 573 82)"
              />
              {Array.from({ length: 6 }).map((_, i) => (
                <rect key={i} x={553 + i * 7} y={110 + (i % 2) * 2} width="5" height={28 - (i % 3) * 3} rx="1.5" fill={i < Math.ceil(filled / 2) ? '#5eead4' : '#dbe6ff'} />
              ))}
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}
