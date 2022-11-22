/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                solarCard: "url('/src/assets/bgSolarService.jpg')",
                eletricCard: "url('/src/assets/bgEletService.jpg')",
                mecCard: "url('/src/assets/bgMecService.jpg')",
                netCard: "url('/src/assets/Telecom/NetSlide.png')"
            }
        }
    },
    plugins: []
}
