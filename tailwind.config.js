module.exports = {
  content: [
    './index.html',
    './*.html', // 루트 html
    './src/**/*.{html,js}',
    './src/**/*.css', // 이 부분이 핵심입니다!
  ],
   safelist: [
    'sidebar-content',
    'main-left',
    'main-content',
    'container',
  ],
   theme: {
    extend: {
     padding: {
        'tiny': '0.2rem',
      }
    }
  },
  plugins: [
   //  require('@tailwindcss/line-clamp'),
  ],
}

