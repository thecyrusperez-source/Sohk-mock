/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        pearl: '#F7F7F5',
        ink: '#0D0D0D',
        concrete: '#E8E8E8',
        graphite: '#5B5B5B',
        blueFire: '#3FA7FF',
        emberFire: '#FF5A2C',
      },
      fontFamily: {
        display: ['"Bebas Neue"', '"Oswald"', 'Impact', 'system-ui', 'sans-serif'],
        script: ['"Caveat"', '"Brush Script MT"', 'cursive'],
        sans: [
          '"SF Pro Display"',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Inter"',
          'system-ui',
          'sans-serif',
        ],
      },
      letterSpacing: {
        nav: '0.18em',
      },
      boxShadow: {
        glass: '0 30px 60px -20px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)',
        card: '0 20px 50px -20px rgba(0,0,0,0.6)',
      },
      backgroundImage: {
        'grain':
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.04 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
      },
    },
  },
  plugins: [],
};
