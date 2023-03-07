import { MantineThemeOverride } from "@mantine/core";

export const lightTheme: MantineThemeOverride = {
  fontFamily: 'Open Sans, sans-serif',
  headings: { fontFamily: 'Poppins, sans-serif'},
  colorScheme: 'light',
  primaryColor: 'blue',
  primaryShade: 4
}

export const darkTheme: MantineThemeOverride = {
  ...lightTheme,
  colorScheme: 'dark',
  primaryColor: 'pink',
  primaryShade: 6,
  components: {
    Badge: {
      defaultProps: {
        sx: {
            backgroundColor: 'rgba(192,37,92,1)',
        }
      }
    }
  }
}