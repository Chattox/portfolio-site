import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useState } from 'react';

import { lightTheme, darkTheme } from './styles/themes';
import { Main as DesktopMain } from './desktop/Main';
import { Main as MobileMain } from './mobile/Main';
import { PortfolioGlobalStyles } from './styles/PortfolioGlobalStyles';

export default function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  const isMobile = useMediaQuery('(max-width: 900px)');

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider
        theme={colorScheme === 'light' ? lightTheme : darkTheme}
        withGlobalStyles
        withNormalizeCSS
      >
        <PortfolioGlobalStyles />
        {isMobile ? <MobileMain /> : <DesktopMain />}
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
