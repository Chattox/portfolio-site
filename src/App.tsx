import { MantineProvider } from '@mantine/core';
import { ParallaxProvider } from 'react-scroll-parallax';
import { lightTheme, darkTheme } from './themes';

import { Main } from './pages/Main';

export default function App() {
  return (
    <MantineProvider theme={lightTheme} withGlobalStyles withNormalizeCSS>
      <ParallaxProvider>
        <Main />
      </ParallaxProvider>
    </MantineProvider>
  );
}
