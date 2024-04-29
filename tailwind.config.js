/** @type {import('tailwindcss').Config} */
export default {
  content: ['./client/**/*.{html,js,jsx}'],
  theme: {
    extend: {}
  },
  plugins: [require('@tailwindcss/forms')]
}

// npx tailwindcss -i ./public/input.css -o ./public/tailwind.css --watch
