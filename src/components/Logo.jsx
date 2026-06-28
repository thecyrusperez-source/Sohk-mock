import React from 'react';
import { asset } from '../utils/asset.js';

/**
 * Static SOHK graffiti tag. Uses the processed PNG (white-on-transparent),
 * so it sits cleanly on any dark background.
 */
export default function Logo({ className = '' }) {
  return (
    <img
      src={asset('logo/sohk.png')}
      alt="School of Hard Knocks"
      className={`block w-full h-auto select-none ${className}`}
      draggable={false}
    />
  );
}
