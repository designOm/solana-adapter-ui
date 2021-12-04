import React, { useCallback } from 'react'

export const defaultDarkColors = {
  bgColor: '#000000',
  primaryColor: '#DC1FFF',
  secondaryColor: '#00FFA3',
  darkColor: '#1A1A1A',
  textOnBg: '#ffffff',
  lightGray: '#212529',
  darkGray: '#444444',
  fontColor: '#ffffff',
  lighterDark: '#BFBFBF',
  footerColor: "#000000",
  sectionBgOne:'#0d0d0d',
}
export const defaultLightColors = {
  bgColor: '#ffffff',
  primaryColor: '#00FFA3',
  secondaryColor: '#DC1FFF ',
  darkColor: '#fcfcfc',
  textOnBg: '#000000',
  lightGray: '#fafafa',
  darkGray: '#BFBFBF',
  fontColor: '#000000',
  lighterDark: '#444444',
  footerColor: '#F8F8F8',
  sectionBgOne:'#E5E5E5'
}

export const APIThemeContext = React.createContext({
  colorMode: '',
  colorPlates: {
    bgColor: '',
    primaryColor: '',
    secondaryColor: '',
    darkColor: '',
    textOnBg: '',
    lightGray: '',
    darkGray: '',
    fontColor: '',
    lighterDark: '',
    footerColor: '',
    sectionBgOne:''
  },
  typography: {
    fontFamily: ''
  },
  gradient: {
    one: '',
    two: ''
  },
  changeColorMode: () => { },
  changeColorTheme: () => { },
  changeTypography: () => { }
});


export default function APIThemeProvider({ children }) {
  const [colorMode, setColorMode] = React.useState('dark')
  const [colorPlates, setColorPlates] = React.useState({ ...defaultDarkColors })
  const [typography, setTypography] = React.useState({
    fontFamily: `'Poppins', sans-serif`
  })

  const gradient = {
    one: 'linear-gradient(90.04deg, #00FFA3 0.04%, #DC1FFF 128.12%)',
    two: 'linear-gradient(89.79deg, #00FFA3 0.17%, #1CE2AF 99.81%, #DC1FFF 99.82%)'
  }

  let savedApexTheme = localStorage.getItem('apexTheme');
  if (savedApexTheme !== null) savedApexTheme = JSON.parse(savedApexTheme)

  const changeColorMode = (colorMode, colorPlates) => {
    setColorMode(colorMode);
    setColorPlates(colorPlates)
    localStorage.setItem('apexTheme', JSON.stringify({ colorMode, colorPlates, typography, gradient }))
  }

  const changeColorTheme = (colorPlates) => setColorPlates(colorPlates)
  const changeTypography = (typography) => setTypography(typography)

  const buildApexTheme = savedApexTheme !== null ? savedApexTheme : { colorMode, colorPlates, typography, gradient }

  const contextValue = {
    ...buildApexTheme,
    changeColorMode: useCallback((colorMode, colorPlates) => changeColorMode(colorMode, colorPlates), []),
    changeColorTheme: useCallback((colorPlates) => changeColorTheme(colorPlates), []),
    changeTypography: useCallback((typography) => changeTypography(typography), [])
  }
  return <APIThemeContext.Provider value={contextValue}>{children}</APIThemeContext.Provider>
}