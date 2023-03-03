import { ActionIcon, createStyles, useMantineColorScheme } from '@mantine/core';
import { IconSunFilled, IconMoonFilled } from '@tabler/icons-react';

const useStyles = createStyles(() => ({
  switcher: {
    margin: '16px',
  },
}));

export const ThemeSwitcher = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { classes } = useStyles();

  return (
    <ActionIcon
      size="xl"
      variant="outline"
      onClick={() => toggleColorScheme()}
      className={classes.switcher}
      color={colorScheme === 'dark' ? 'yellow.4' : 'blue.6'}
    >
      {colorScheme === 'dark' ? <IconSunFilled stroke={2.5} /> : <IconMoonFilled stroke={2.5} />}
    </ActionIcon>
  );
};
