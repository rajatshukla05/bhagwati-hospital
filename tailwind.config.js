/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#061224',
          900: '#0B2545',
          850: '#0E2E54',
          800: '#133863',
          700: '#1D4C82',
          600: '#2A66AA',
        },
        teal: {
          950: '#04282C',
          900: '#074349',
          800: '#0D6E77',
          700: '#12828C',
          600: '#199FA9',
          500: '#24BDC8',
          100: '#E6F5F6',
          50: '#F2FAF9',
        },
        gold: {
          800: '#7D5C1E',
          700: '#9C772F',
          600: '#B58E3E',
          500: '#C5A059',
          400: '#D6B570',
          300: '#E8CE93',
          200: '#F3E4C0',
          100: '#FAF3E1',
          50: '#FDFBF5',
        },
        crimson: {
          800: '#800D15',
          700: '#A1141F',
          600: '#C81E2B',
          500: '#E02937',
          50: '#FEF2F2',
        },
        lotus: {
          600: '#C74E64',
          500: '#E26D82',
          400: '#F08B9B',
          200: '#FAC3CD',
          50: '#FDF2F4',
        },
        ivory: {
          50: '#FAF8F5',
          100: '#F5F2EB',
          200: '#EAE5D8',
          300: '#DCD4C2',
        },
      },
      fontFamily: {
        display: ['Cinzel', 'Cormorant Garamond', 'Georgia', 'serif'],
        serif: ['Cormorant Garamond', 'Cinzel', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'elevated': '0 20px 40px -15px rgba(11, 37, 69, 0.08), 0 0 1px 1px rgba(11, 37, 69, 0.05)',
        'elevated-lg': '0 25px 50px -12px rgba(11, 37, 69, 0.12), 0 0 1px 1px rgba(11, 37, 69, 0.06)',
        'gold-glow': '0 0 30px -5px rgba(197, 160, 89, 0.25)',
        'teal-glow': '0 0 30px -5px rgba(13, 110, 119, 0.3)',
      },
    },
  },
  plugins: [],
}
