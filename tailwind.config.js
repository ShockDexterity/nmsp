/** @type {import('tailwindcss').Config} */
export default {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {}
  },
  plugins: []
}

// npx tailwindcss -i ./public/input.css -o ./public/tailwind.css --watch
