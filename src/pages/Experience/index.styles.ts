import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  background: {
    position: 'absolute',
    background: theme.colorScheme === 'light' ? theme.colors.blue[3] : theme.colors.indigo[9],
    width: '100%',
  },
  alignCenter: {
    display: 'flex',
    alignItems: 'center',
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundIcon: {
    color: theme.colorScheme === 'light' ? theme.colors.yellow[5] : theme.colors.yellow[0],
  },
}));
