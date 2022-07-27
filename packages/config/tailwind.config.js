const { fontFamily } = require('tailwindcss/defaultTheme')

const config = require('./tailwind.brand.config')

console.log('****************************', '*******', '***************************')
console.log('****************************', process.env.APP_KEY, '***************************')
console.log('****************************', '*******', '***************************')

const brandConfig = process.env.APP_KEY && config[process.env.APP_KEY] ? config[process.env.APP_KEY] : config.pcaskin

module.exports = {
    content: [
        "../../packages/ui/src/components/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    ...brandConfig.colors
                }
            },
            fontFamily: {
                "new-hero": ["New Hero", ...fontFamily.sans],
                "open-sans": ["Open Sans", ...fontFamily.sans]
            }
        },
        container: {
            padding: '1.25rem',
            center: true
        },
    },
    plugins: [],
}
