import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  expItem: {
    backgroundColor:
      theme.colorScheme === 'light'
        ? theme.fn.rgba(theme.colors.gray[3], 0.5)
        : theme.fn.rgba(theme.colors.gray[9], 0.5),
    borderRadius: theme.radius.lg,
    margin: 0,
    marginBottom: '1rem',
    padding: '0.5rem',
  },
  dateText: {
    color: theme.colorScheme === 'light' ? theme.colors.gray[8] : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
  },
}));
