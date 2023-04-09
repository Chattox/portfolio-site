import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => {
  const lightGradient = () => {
    return theme.fn.gradient({ from: theme.colors.blue[3], to: theme.colors.blue[2], deg: 180 });
  };
  const darkGradient = () => {
    return theme.fn.gradient({
      from: theme.colors.indigo[9],
      to: theme.colors.indigo[6],
      deg: 180,
    });
  };
  return {
    expContainer: {
      padding: '1rem',
      backgroundColor:
        theme.colorScheme === 'light' ? theme.colors.blue[3] : theme.colors.indigo[9],
      backgroundImage: theme.colorScheme === 'light' ? lightGradient() : darkGradient(),
    },
    backgroundSunMoon: {
      color: theme.colorScheme === 'light' ? theme.colors.yellow[5] : theme.colors.yellow[0],
    },
    backgroundCloudBack: {
      color: theme.colorScheme === 'light' ? theme.colors.gray[3] : theme.colors.gray[5],
    },
    backgroundCloudFront: {
      color: theme.colorScheme === 'light' ? theme.colors.gray[4] : theme.colors.gray[6],
    },
  };
});
