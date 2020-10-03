export const Breakpoints = {
  xs: '640px',
  sm: '830px',
  md: '1100px',
  lg: '1500px'
}

const Colors = {
  primary: '#c089A8',
  primary_light: '#CC91B2',
  primary_dark: '#805B6F',
  secondary: '#f8cbAe',
  secondary_light: '#DEB69B',
  secondary_dark: '#B89781',
  gray: '#dfe6e9',
  gray_15: '#bdc3c7',
  gray_50: '#636e72',
  light: '#ffffff',
  dark: '#2c2b2b',
  facebook: '#3b5998',
  red: '#d63031'
}

const FontSize = {
  10: '10px',
  12: '12px',
  14: '14px',
  16: '16px',
  18: '18px',
  65: '65px'
}

const FontWeight = {
  light: 300,
  normal: 400,
  medium: 600,
  bold: 700
}

const Spaces = {
  0: '0',
  4: '4px',
  8: '8px',
  12: '12px',
  16: '16px',
  24: '24px',
  32: '32px',
  40: '40px',
  48: '48px'
}

/** them for styled components */
export const ThemeStyledComponents = {
  screen: Breakpoints,
  color: Colors,
  typography: {
    fontSize: FontSize,
    fontWeight: FontWeight
  },
  space: Spaces
}