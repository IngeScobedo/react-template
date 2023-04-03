import { createTheme } from '@mui/material'
import type {} from '@mui/lab/themeAugmentation'
import '@mui/lab/themeAugmentation'

declare module '@mui/material/styles' {
  interface Palette {
    placeholderColor: Palette['primary']
  }

  interface TypographyVariants {
    inputError: React.CSSProperties
    link: React.CSSProperties
    buttonLink: React.CSSProperties
    navbarUserLabel: React.CSSProperties
    AddNoteModalHeader: React.CSSProperties
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    inputError?: React.CSSProperties
    link?: React.CSSProperties
    buttonLink?: React.CSSProperties
    navbarUserLabel?: React.CSSProperties
    AddNoteModalHeader?: React.CSSProperties
  }

  interface PaletteOptions {
    placeholderColor: PaletteOptions['primary']
  }

  interface PaletteColor {
    darker?: string
  }

  interface SimplePaletteColorOptions {
    darker?: string
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    inputError: true
    link: true
    buttonLink: true
    navbarUserLabel: true
    AddNoteModalHeader: true
  }
}

const blueTheme = createTheme({
  palette: {
    primary: {
      main: '#5D7FC8',
      light: '#5D7FC8',
    },
    secondary: {
      main: '#5E5873',
      dark: '#6E6B7B',
      light: '#B9B9C3 ',
    },
    error: {
      main: '#EA5455',
    },
    background: {
      default: '#F8F8F8',
    },
    text: {
      primary: '#5E5873',
      secondary: '#6E6B7B',
    },
    grey: {
      '100': '#D8D6DE',
    },
    placeholderColor: {
      main: '#B9B9C3',
    },
  },
  typography: {
    h1: {
      fontSize: '18px',
      color: '#5E5873',
    },
    h2: {
      fontSize: '16px',
      color: '#B9B9C3',
    },
    h3: {
      fontSize: '15px',
      color: '#5E5873',
    },
    body1: {
      fontSize: '14px',
    },
    body2: {
      fontSize: '12px',
    },
    fontFamily: 'Montserrat',
    inputError: {
      fontSize: '12px',
      lineHeight: '24px',
      color: '#EA5455',
    },
    link: {
      fontSize: '12px',
      lineHeight: '18px',
      color: '#5D7FC8',
    },
    buttonLink: {
      fontSize: '14px',
      lineHeight: '18px',
      color: '#5D7FC8',
    },
    navbarUserLabel: {
      fontSize: '14px',
      fontWeight: '500',
      lineHeight: '18px',
    },
    AddNoteModalHeader: {
      fontSize: '18px',
      color: '#5E5873',
      fontWeight: '500',
      lineHeight: '20px',
      marginLeft: '15px',
    },
  },
})

export default blueTheme
