/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Fredoka', 'system-ui', 'sans-serif'],
        body: ['Poppins', 'system-ui', 'sans-serif'],
      },
      colors: {
        pink: {
          50: '#FFF5FA',
          100: '#FFD6E8',
          200: '#FFB8D8',
          300: '#FF9AC8',
          400: '#FF7BAC',
          500: '#FF5C9C',
        },
        lilac: {
          50: '#F6F0FF',
          100: '#E6D6FF',
          200: '#D4BFFF',
          300: '#C2A8FF',
          400: '#B388FF',
          500: '#A06BFF',
        },
        babyblue: {
          50: '#F0FAFF',
          100: '#D6F0FF',
          200: '#B8E5FF',
          300: '#9ADBFF',
        },
        butter: {
          50: '#FFFCF0',
          100: '#FFF3C4',
          200: '#FFEAA0',
        },
        mint: {
          50: '#F0FCF7',
          100: '#D4F7E6',
          200: '#B0F0D0',
          300: '#8CE9BC',
        },
        cream: '#FFF9F5',
        ink: '#3D2B4E',
        softink: '#5A4568',
      },
      borderRadius: {
        'xl2': '1.5rem',
        '3xl2': '2rem',
        '4xl2': '2.5rem',
      },
      boxShadow: {
        'soft': '0 8px 30px rgba(180, 130, 200, 0.15)',
        'softer': '0 4px 20px rgba(180, 130, 200, 0.10)',
        'pop': '0 10px 0 rgba(255, 123, 172, 0.12), 0 20px 40px rgba(180, 130, 200, 0.18)',
        'card': '0 6px 0 rgba(180, 130, 200, 0.08), 0 12px 30px rgba(180, 130, 200, 0.14)',
        'inset-soft': 'inset 0 2px 8px rgba(180, 130, 200, 0.08)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-20px) rotate(5deg)' },
          '66%': { transform: 'translateY(10px) rotate(-3deg)' },
        },
        squish: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.92, 1.08)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0', transform: 'scale(0.5) rotate(0deg)' },
          '50%': { opacity: '1', transform: 'scale(1) rotate(180deg)' },
        },
        drift: {
          '0%': { transform: 'translateX(-10%)' },
          '100%': { transform: 'translateX(110%)' },
        },
        bobble: {
          '0%, 100%': { transform: 'translateY(0) rotate(-2deg)' },
          '50%': { transform: 'translateY(-6px) rotate(2deg)' },
        },
        pulseSoft: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.05)', opacity: '0.85' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        floatSlow: 'floatSlow 8s ease-in-out infinite',
        squish: 'squish 0.4s ease-in-out',
        wiggle: 'wiggle 0.5s ease-in-out infinite',
        sparkle: 'sparkle 2s ease-in-out infinite',
        drift: 'drift 25s linear infinite',
        bobble: 'bobble 2.5s ease-in-out infinite',
        pulseSoft: 'pulseSoft 2s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [],
};
