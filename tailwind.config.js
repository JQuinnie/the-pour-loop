const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.js', './components/**/*.js', './layouts/**/*.js', './lib/**/*.js'],
  darkMode: 'class',
  theme: {
    extend: {
      spacing: {
        '9/16': '56.25%',
      },
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        comfortaa: ['Comfortaa', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: colors.teal,
        gray: colors.trueGray,
        code: {
          green: '#b5f4a5',
          yellow: '#ffe484',
          purple: '#d9a9ff',
          red: '#ff8383',
          blue: '#93ddfd',
          white: '#fff',
        },
        pheasant: '#C48162',
        espresso: '#331D1A',
        seafoam: '#C9D6B0',
        marsala: '#975152',
        marsalaLight: '#EB9A9A',
        marsalaDark: '#693136',
        offWhite: '#F4EDED',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.marsalaDark'),
            a: {
              color: theme('colors.primary.600'),
              '&:hover': {
                color: theme('colors.seafoam'),
              },
              code: { color: theme('colors.primary.400') },
            },
            h1: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.marsalaLight'),
            },
            h2: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.marsalaLight'),
            },
            h3: {
              fontWeight: '600',
              color: theme('colors.marsalaLight'),
            },
            'h4,h5,h6': {
              color: theme('colors.marsalaLight'),
            },
            code: {
              color: theme('colors.pink.500'),
              backgroundColor: theme('colors.gray.100'),
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
            },
            'code:before': {
              content: 'none',
            },
            'code:after': {
              content: 'none',
            },
            hr: { borderColor: theme('colors.marsalaDark') },
            'ol li:before': {
              fontWeight: '600',
              color: theme('colors.marsalaDark'),
            },
            'ul li:before': {
              backgroundColor: theme('colors.marsalaDark'),
            },
            strong: { color: theme('colors.gray.600') },
            blockquote: {
              color: theme('colors.gray.900'),
              borderLeftColor: theme('colors.gray.200'),
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.offWhite'),
            a: {
              color: theme('colors.seafoam'),
              '&:hover': {
                color: theme('colors.marsalaLight'),
              },
              code: { color: theme('colors.marsalaLight') },
            },
            h1: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.marsalaLight'),
            },
            h2: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.marsalaLight'),
            },
            h3: {
              fontWeight: '600',
              color: theme('colors.marsalaLight'),
            },
            'h4,h5,h6': {
              color: theme('colors.marsalaLight'),
            },
            code: {
              backgroundColor: theme('colors.marsalaDark'),
            },
            hr: { borderColor: theme('colors.offWhite') },
            'ol li:before': {
              fontWeight: '600',
              color: theme('colors.gray.400'),
            },
            'ul li:before': {
              backgroundColor: theme('colors.gray.400'),
            },
            strong: { color: theme('colors.gray.100') },
            thead: {
              color: theme('colors.gray.100'),
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.700'),
              },
            },
            blockquote: {
              color: theme('colors.gray.100'),
              borderLeftColor: theme('colors.gray.700'),
            },
          },
        },
      }),
    },
  },
  variants: {
    typography: ['dark'],
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
