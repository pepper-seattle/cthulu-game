export const Breakpoints = {
  xs: '640px',
  sm: '830px',
  md: '1100px',
  lg: '1500px'
}

const Colors = {
  primary: '#222222',
  secondary: '#ff4655'
}

const FontSize = {
  16: '16px',
  18: '18px',
  45: '45px',
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