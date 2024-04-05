/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./resources/**/*.blade.php",
      "./resources/**/*.js",
      "./resources/**/*.vue",
      "./resources/**/*.*",
  ],
  theme: {
      screens: {
          'xs': '320px',
          // min-width: 320px

          'sm': '640px',
          // min-width: 640px

          'sm2': '704px',
          // min-width: 704px

          'md': '768px',
          // min-width: 768px

          'md2': '896px',
          // min-width: 896px

          'lg': '1024px',
          // min-width: 1024px

          'lg2': '1152px',
          // min-width: 1152px

          'xl': '1280px',
          // min-width: 1280px

          '2xl': '1536px',
          // min-width: 1536px

          '3xl': '1792px',
          // min-width: 1792px

          '4xl': '2048px',
          // min-width: 2048px
      },
      extend: {},
  },
  plugins: [],
}

