/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                // Marvel Rivalsテーマカラー
                'marvel-red': '#E62429',
                'marvel-gold': '#FFD700',
                'marvel-dark': '#1a1a2e',
                'marvel-purple': '#6B21A8',
                'marvel-blue': '#0066CC',
            },
            fontFamily: {
                display: ['Outfit', 'sans-serif'],
                body: ['Inter', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'hero-gradient': 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
};
