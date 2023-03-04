import { ActionIcon, createStyles, useMantineColorScheme } from '@mantine/core';
import { IconSunFilled, IconMoonFilled } from '@tabler/icons-react';
import { motion } from 'framer-motion';

const useStyles = createStyles(() => ({
  switcher: {
    margin: '16px',
  },
}));

export const ThemeSwitcher = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { classes } = useStyles();

  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={classes.switcher}>
      <ActionIcon
        size="xl"
        variant="outline"
        onClick={() => toggleColorScheme()}
        color={colorScheme === 'dark' ? 'yellow.4' : 'blue.6'}
      >
        {colorScheme === 'dark' ? <IconSunFilled stroke={2.5} /> : <IconMoonFilled stroke={2.5} />}
      </ActionIcon>
    </motion.div>
  );
};
