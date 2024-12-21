/** @type {import('tailwindcss').Config} */
import flowbite from 'flowbite/plugin'

export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      spacing: {
        '67rem': '67rem',
      },
      boxShadow: {
        'no-top': '0 2px 4px rgba(0, 0, 0, 0.1)',
        'no-right': '-2px 0 4px rgba(0, 0, 0, 0.1)',
        'no-bottom': '0 -2px 4px rgba(0, 0, 0, 0.1)',
        'no-left': '2px 0 4px rgba(0, 0, 0, 0.1)',
      },

      colors: {
        SideBarBlue: '#0f172a',
        SideBarTop: '#247dbd',
        SideBarUser: '#2B3248',
        OtherSideBar: '#3c445e',
        ContentBG: '#ffffff',
        SideBarItems: '#8896ab',
        SideBarMultiSelection: '#26303F',
        Border: '#dcdee1',
      },
    },
  },
  plugins: [flowbite],
}
