import {
  alpha,
  CSSVariablesResolver,
  MantineThemeOverride,
} from "@mantine/core";

export const lightTheme: MantineThemeOverride = {
  fontFamily: "Open Sans, sans-serif",
  headings: { fontFamily: "Poppins, sans-serif" },
  primaryColor: "blue",
  primaryShade: 4,
};

export const darkTheme: MantineThemeOverride = {
  ...lightTheme,
  primaryColor: "pink",
  primaryShade: 6,
  components: {
    Badge: {
      defaultProps: {
        sx: {
          backgroundColor: "rgba(192,37,92,1)",
        },
      },
    },
  },
};

export const resolver: CSSVariablesResolver = (theme) => ({
  variables: {},
  light: {
    "--mantine-scroll-top-gray": alpha(theme.colors.gray[3], 0.75),
  },
  dark: {
    "--mantine-scroll-top-gray": alpha(theme.colors.gray[9], 0.5),
  },
});
