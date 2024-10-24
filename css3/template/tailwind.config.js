/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
         backgroundImage: {
        'striped': 'linear-gradient(45deg, rgba(255,255,255,0.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.15) 75%, transparent 75%, transparent)',
      },
      colors: {
        'button-blue': '#6A5ACD',
      },
      backgroundSize: {
        'stripes': '20px 20px',
      },
    },
  },
  plugins: [],
}

