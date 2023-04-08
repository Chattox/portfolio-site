import { Center, ColorScheme, ColorSchemeProvider, Loader, MantineProvider } from '@mantine/core';
import { useColorScheme, useMediaQuery } from '@mantine/hooks';
import { useEffect, useState } from 'react';

import { lightTheme, darkTheme } from './styles/themes';
import { Main as DesktopMain } from './desktop/Main';
import { Main as MobileMain } from './mobile/Main';
import { PortfolioGlobalStyles } from './styles/PortfolioGlobalStyles';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const systemColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  const isMobile = useMediaQuery('(max-width: 900px)');

  useEffect(() => {
    const onPageLoad = () => {
      setIsLoaded(true);
      setColorScheme(systemColorScheme);
    };

    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad, false);
      return () => window.removeEventListener('load', onPageLoad);
    }
  }, [systemColorScheme]);

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider
        theme={colorScheme === 'light' ? lightTheme : darkTheme}
        withGlobalStyles
        withNormalizeCSS
      >
        <PortfolioGlobalStyles />
        {isLoaded ? (
          isMobile ? (
            <MobileMain />
          ) : (
            <DesktopMain />
          )
        ) : (
          <Center>
            <Loader />
          </Center>
        )}
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
