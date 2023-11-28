/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./node_modules/flowbite/**/*.{js, jsx, ts, tsx}"
    ],
    theme: {
        extend: {
            spacing: {
                '460px': '460px',
            }
        }
    },
    plugins: [
        require('flowbite/plugin')
    ],
}