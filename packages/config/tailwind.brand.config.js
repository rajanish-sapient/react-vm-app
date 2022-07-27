const colors = require('tailwindcss/colors')

module.exports = {
    pcaskin: {
        colors: {
            primary: colors.stone[900],
            secondary: colors.white,
            accent: {
                gray: {
                    light: colors.gray[300],
                    dark: colors.gray[500]
                },
                default: colors.blue[700]
            }
        }
    },
    eltamd: {
        colors: {
            primary: '#A30B35',
            secondary: colors.white,
            accent: {
                gray: {
                    light: colors.gray[300],
                    dark: colors.gray[500]
                },
                default: colors.blue[700]
            }
        }
    }
}
