import { ThemeProvider } from "styled-components"

import GlobalStyle from "styles/global"
import theme from 'styles/theme'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
	backgrounds: {
    default: 'won-light',
    values: [
      {
        name: 'won-dark',
        value: theme.colors.mainBg,
      },
      {
        name: 'won-light',
        value: theme.colors.white,
      },
    ],
  },
}

export const decorators = [
	(Story) => (
		<ThemeProvider theme={theme}>
			<GlobalStyle removeBg />
			<Story />
		</ThemeProvider>
	)
]