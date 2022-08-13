/** @type {import('tailwindcss').Config} */
module.exports = {
    prefix: 'tw-',
    content: [
        './layouts/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './hooks/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            aspectRatio: {
                '3/4': '3 / 4',
                '4/3': '4 / 3',
                '16/10': '16 / 10',
                '21/9': '21 / 9',
            },
        },
    },
    plugins: [],
}
