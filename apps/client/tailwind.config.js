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
        soft: '0 24px 90px -60px rgba(15, 23, 42, 0.35)',
        inner: 'inset 0 2px 4px rgba(0,0,0,0.3)',
        'glow-lg': '0 40px 160px -80px rgba(34, 197, 94, 0.4)',
        'glow-teal': '0 30px 100px -50px rgba(20, 184, 166, 0.3)',
        'glow-violet': '0 30px 100px -50px rgba(139, 92, 246, 0.3)'
      },
      backdropBlur: {
        soft: '18px',
        lg: '32px'
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        shimmer: 'shimmer 2s infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' }
        }
      }
    }
  },
  plugins: []
};
