import { createStyles } from '@mantine/core';

interface ExperienceStyles {
  side?: 'left' | 'right';
}

export const useStyles = createStyles<string, ExperienceStyles>((theme, { side }) => ({
  expContainer: {
    width: 750,
    backgroundColor:
      theme.colorScheme === 'light'
        ? theme.fn.rgba(theme.colors.gray[5], 0.5)
        : theme.fn.rgba(theme.colors.gray[9], 0.5),
    borderRadius: theme.radius.lg,
    display: 'flex',
    justifyContent: side === 'left' ? 'flex-start' : 'flex-end',
    margin: 16,
  },
  textContent: {
    margin: '16px',
  },
  dateText: {
    color: theme.colorScheme === 'light' ? theme.colors.gray[8] : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
  },
}));
