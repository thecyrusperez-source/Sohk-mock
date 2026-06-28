import React from 'react';

/**
 * Custom SOHK graffiti tag. Black and white only.
 * Hand-tuned SVG with chunky bubble letterforms, slight skew, drip detail.
 * Each letter is rendered as a path/group so the LogoIntro can draw outlines
 * sequentially before filling.
 */
const SLetter = ({ stroke, fill, strokeWidth = 5 }) => (
  <g>
    <path
      d="M22 14 L100 14 Q116 14 116 28 L116 38 Q116 52 100 52 L52 52 Q44 52 44 58 Q44 64 52 64 L100 64 Q120 64 120 82 L120 96 Q120 110 100 110 L18 110 L18 92 L96 92 Q100 92 100 88 Q100 84 96 84 L42 84 Q22 84 22 66 L22 50 Q22 36 42 36 L88 36 Q92 36 92 32 Q92 28 88 28 L22 28 Z"
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
      strokeLinecap="round"
    />
    {/* star accent */}
    <path
      d="M125 18 l3 7 l7 0 l-6 5 l2 7 l-6 -4 l-6 4 l2 -7 l-6 -5 l7 0 z"
      fill={fill}
      stroke={stroke}
      strokeWidth={2.5}
      strokeLinejoin="round"
    />
  </g>
);

const OLetter = ({ stroke, fill, strokeWidth = 5 }) => (
  <path
    fillRule="evenodd"
    d="M155 14 L215 14 Q235 14 235 34 L235 90 Q235 110 215 110 L155 110 Q135 110 135 90 L135 34 Q135 14 155 14 Z M163 36 Q159 36 159 42 L159 82 Q159 88 163 88 L207 88 Q211 88 211 82 L211 42 Q211 36 207 36 Z"
    fill={fill}
    stroke={stroke}
    strokeWidth={strokeWidth}
    strokeLinejoin="round"
    strokeLinecap="round"
  />
);

const HLetter = ({ stroke, fill, strokeWidth = 5 }) => (
  <path
    d="M252 14 L284 14 L284 50 L324 50 L324 14 L356 14 L356 110 L324 110 L324 72 L284 72 L284 110 L252 110 Z"
    fill={fill}
    stroke={stroke}
    strokeWidth={strokeWidth}
    strokeLinejoin="round"
    strokeLinecap="round"
  />
);

const KLetter = ({ stroke, fill, strokeWidth = 5 }) => (
  <g>
    <path
      d="M372 14 L404 14 L404 50 L438 14 L478 14 L432 60 L482 110 L440 110 L404 72 L404 110 L372 110 Z"
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
      strokeLinecap="round"
    />
    {/* throw-up wing */}
    <path
      d="M484 30 q14 -2 22 6 q-10 -1 -18 6"
      fill="none"
      stroke={stroke}
      strokeWidth={4}
      strokeLinecap="round"
    />
  </g>
);

/**
 * The full SOHK logo. `mono` controls whether it's white-on-transparent
 * (for hero) or black-outline-on-white (for default).
 */
export default function Logo({
  className = '',
  mono = 'light', // 'light' = white fill, dark outline; 'dark' = ink fill, white outline
  // intro animation refs/controls
  letterRefs,
  introMode = false,
}) {
  const fill = mono === 'light' ? '#F7F7F5' : '#0D0D0D';
  const stroke = mono === 'light' ? '#0D0D0D' : '#F7F7F5';

  // When introMode is true, letters render only as thin sketch outlines
  // (no fill). LogoIntro switches this off when the fill should snap in.
  const liveFill = introMode ? 'transparent' : fill;
  const liveStroke = introMode ? '#F7F7F5' : stroke;
  const liveStrokeWidth = introMode ? 1.5 : 5;

  return (
    <svg
      viewBox="-8 0 540 140"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="School of Hard Knocks"
      role="img"
    >
      <g transform="translate(0,4) skewX(-6)">
        <g ref={letterRefs?.S}>
          <SLetter fill={liveFill} stroke={liveStroke} strokeWidth={liveStrokeWidth} />
        </g>
        <g ref={letterRefs?.O}>
          <OLetter fill={liveFill} stroke={liveStroke} strokeWidth={liveStrokeWidth} />
        </g>
        <g ref={letterRefs?.H}>
          <HLetter fill={liveFill} stroke={liveStroke} strokeWidth={liveStrokeWidth} />
        </g>
        <g ref={letterRefs?.K}>
          <KLetter fill={liveFill} stroke={liveStroke} strokeWidth={liveStrokeWidth} />
        </g>
      </g>
    </svg>
  );
}
