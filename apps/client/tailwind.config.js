module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#070b14',
        surface: '#0f172a',
        surfacestrong: '#080c14'
      },
      boxShadow: {
        glow: '0 24px 120px -60px rgba(56, 189, 248, 0.5)',
        soft: '0 24px 90px -60px rgba(15, 23, 42, 0.35)'
      },
      backdropBlur: {
        soft: '18px'
      },
      animation: {
        float: 'float 6s ease-in-out infinite'
      }
    }
  },
  plugins: []
};
