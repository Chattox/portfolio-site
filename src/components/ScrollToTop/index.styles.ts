import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  scrollButton: {
    color:
      theme.colorScheme === 'light'
        ? theme.fn.rgba(theme.colors.gray[3], 0.75)
        : theme.fn.rgba(theme.colors.gray[9], 0.5),
    marginLeft: '50%',
  },
}));
