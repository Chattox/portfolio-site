import { useMantineTheme } from '@mantine/core';

// Workaround for apparent theme colour bug for certain components when switching between light and dark mode

export const getColor = () => {
  const theme = useMantineTheme();
  return `${theme.primaryColor}.${theme.primaryShade}`;
};
