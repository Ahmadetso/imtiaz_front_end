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
      colors: {
        SideBarBlue: '#1e293b',
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
