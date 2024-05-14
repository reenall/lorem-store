/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],

      'cormorant': ['Cormorant Garamond'],
      'raleway': ['Raleway'],
      'nunito': ['Nunito Sans'],
    },
    extend: {
      colors: {
        primary: "#000000",
        secondary: '#475569',
        bgPrimary: '#fbfbfb',
        bgSecondary: '#fff',

        darkPrimary: '#fff',
        darkSecondary: '#000000',
        darkBgPrimary: '#000000',
        darkBgSecondary: '#fff'
      }
    },
  },
  plugins: [],
};
