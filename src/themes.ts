import { MantineThemeOverride } from "@mantine/core";

export const lightTheme: MantineThemeOverride = {
  fontFamily: 'Open Sans, sans-serif',
  headings: { fontFamily: 'Poppins, sans-serif'},
  colorScheme: 'light',
  globalStyles: (theme) => ({
    '.mantine-Text-root': {
      padding: '16px'
    }
  })
}

export const darkTheme: MantineThemeOverride = {
  ...lightTheme,
  colorScheme: 'dark'
}