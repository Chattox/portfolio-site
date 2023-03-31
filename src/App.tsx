import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { useState } from 'react';

import { lightTheme, darkTheme } from './styles/themes';
import { Main } from './pages/Main';
import { PortfolioGlobalStyles } from './styles/PortfolioGlobalStyles';

export default function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider
        theme={colorScheme === 'light' ? lightTheme : darkTheme}
        withGlobalStyles
        withNormalizeCSS
      >
        <PortfolioGlobalStyles />
        <Main />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
