import React from 'react'
import { APIThemeContext, defaultDarkColors, defaultLightColors } from '../../Providers/ThemeProvider'

export default function useApexTheme() {
  const { colorMode, colorPlates, typography, changeColorMode, changeColorTheme, changeTypography, gradient } = React.useContext(APIThemeContext);
  return { colorMode, colorPlates, typography, changeColorMode, changeColorTheme, changeTypography, defaultDarkColors, defaultLightColors, gradient }
}