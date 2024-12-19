/** @type {import('tailwindcss').Config} */

import withMT from "@material-tailwind/react/utils/withMT"
export default withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          softCyan: 'hsl(174, 77%, 80%)', // Full Slider Bar
          strongCyan: 'hsl(174, 86%, 45%)', // Slider Background
          lightGrayishRed: 'hsl(14, 92%, 95%)', // Discount Background
          lightRed: 'hsl(15, 100%, 70%)', // Discount Text
          paleBlue: 'hsl(226, 100%, 87%)', // CTA Text
        },
        neutral: {
          white: 'hsl(0, 0%, 100%)', // Pricing Component Background
          veryPaleBlue: 'hsl(230, 100%, 99%)', // Main Background
          lightGrayishBlueEmpty: 'hsl(224, 65%, 95%)', // Empty Slider Bar
          lightGrayishBlueToggle: 'hsl(223, 50%, 87%)', // Toggle Background
          grayishBlue: 'hsl(225, 20%, 60%)', // Text
          darkDesaturatedBlue: 'hsl(227, 35%, 25%)', // Text & CTA Background
        },
      },
    },
  },
  plugins: [],
})

