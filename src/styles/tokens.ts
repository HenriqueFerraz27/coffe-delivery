export const brandColor = {
  yellow: {
    primary: '#F1E9C9',
    secondary: '#DBAC2C',
    tertiary: '#C47F17',
  },
  purple: {
    primary: '#EBE5F9',
    secondary: '#8047F8',
    tertiary: '#4B2995',
  },
} as const

export const typography = {
  family: {
    baloo2: '"Baloo 2", sans-serif',
    roboto: 'Roboto, sans-serif',
  },
  size: {
    '2xs': '0.625rem',
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '2rem',
    '4xl': '3rem',
  },
  weight: {
    regular: 400,
    bold: 700,
    extraBold: 800,
  },
  lineHeight: {
    base: 1.6,
  },
} as const
