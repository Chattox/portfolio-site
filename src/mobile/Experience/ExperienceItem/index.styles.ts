import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  expItem: {
    backgroundColor:
      theme.colorScheme === 'light'
        ? theme.fn.rgba(theme.colors.gray[3], 0.75)
        : theme.fn.rgba(theme.colors.gray[9], 0.75),
    borderRadius: theme.radius.lg,
    margin: 0,
    marginBottom: '10rem',
    padding: '0.5rem',
    zIndex: 2,
  },
  dateText: {
    color: theme.colorScheme === 'light' ? theme.colors.gray[8] : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
  },
}));
