/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        'custom':'rgba(0, 0, 0, 0.15) 0px 3px 3px 0px',
        'secondary':'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px',
      },
      backgroundColor:{
        'gradient':' linear-gradient(90deg, rgba(102,94,200,0.5) 0%, rgba(148,187,233,1) 100%)'
      },
    },
  },
  plugins: [],
};
