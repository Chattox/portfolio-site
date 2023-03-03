import { createStyles, Switch, useMantineColorScheme } from '@mantine/core';
import { IconSunFilled, IconMoonFilled } from '@tabler/icons-react';
import { useState } from 'react';

const useStyles = createStyles((theme) => ({
  sunIcon: {
    color: theme.colors.yellow[4],
  },
  moonIcon: {
    color: theme.colors.blue[6],
  },
}));

export const ThemeSwitcher = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { classes } = useStyles();

  const [checked, setChecked] = useState(false);

  return (
    <Switch
      checked={checked}
      size="xl"
      onChange={(e) => {
        setChecked(e.currentTarget.checked);
        toggleColorScheme();
      }}
      color={colorScheme === 'dark' ? 'gray' : 'dark'}
      thumbIcon={
        checked ? (
          <IconMoonFilled size="1rem" stroke={2.5} className={classes.moonIcon} />
        ) : (
          <IconSunFilled size="1rem" stroke={2.5} className={classes.sunIcon} />
        )
      }
    />
  );
};
