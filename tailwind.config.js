/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,css}",
  ],
  theme: {
    extend: {
      colors: {
        "body": "var(--body-color)",
        "primary": "var(--primary-color)",
        "primary-light": "var(--primary-color-light)",
        "primary-dark": "var(--primary-color-dark)",
      },
      textColor: {
        "primary": "var(--text-primary)",
        "secondary": "var(--text-secondary)",
        "primary-i": "var(--text-secondary-i)",
        "secondary-i": "var(--text-secondary-i)",
      }
    },
  },
  plugins: [
    require("flowbite/plugin"),
    require('@tailwindcss/line-clamp'),
  ],
}
