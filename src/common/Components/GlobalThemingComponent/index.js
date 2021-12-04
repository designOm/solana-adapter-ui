import React from 'react'
import { Global, css } from '@emotion/react'
import useApexTheme from '../../Hooks/useTheme';

export const GlobalThemingComponent = () => {
  const { colorPlates, typography,gradient  } = useApexTheme();
  return (
    <Global
      styles={css`
				:root {
					--bgColor: ${colorPlates.bgColor};
					--primaryColor: ${colorPlates.primaryColor};
					--secondaryColor: ${colorPlates.secondaryColor};
					--darkColor: ${colorPlates.darkColor};
          --font-family:${typography.fontFamily};
          --textOnBg:${colorPlates.textOnBg};
					--lightGray:${colorPlates.lightGray};
					--darkGray:${colorPlates.darkGray};
					--fontColor:${colorPlates.fontColor};
					--gradientOne:${gradient.one};
					--gradientTwo:${gradient.two};
					--footerColor:${colorPlates.footerColor};
					--lighterDark:${colorPlates.lighterDark};
					--sectionBgOne:${colorPlates.sectionBgOne};
					--sectionBgTwo:${colorPlates.sectionBgTwo};
				}
			`}
    />
  );
};