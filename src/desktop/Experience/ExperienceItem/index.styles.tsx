import { createStyles } from '@mantine/core';

interface ExperienceStyles {
  side?: 'left' | 'right';
  firstOrLast?: 'first' | 'last';
}

export const useStyles = createStyles<string, ExperienceStyles>((theme, { side }) => ({
  expContainer: {
    alignSelf: side === 'left' ? 'flex-start' : 'flex-end',
    display: 'flex',
    marginTop: 250,
    marginBottom: 350,
    marginLeft: 16,
    marginRight: 16,
    zIndex: 999,
  },
  expScrollButton: {
    color:
      theme.colorScheme === 'light'
        ? theme.fn.rgba(theme.colors.gray[3], 0.75)
        : theme.fn.rgba(theme.colors.gray[9], 0.5),
  },
  expItem: {
    width: 750,
    backgroundColor:
      theme.colorScheme === 'light'
        ? theme.fn.rgba(theme.colors.gray[3], 0.5)
        : theme.fn.rgba(theme.colors.gray[9], 0.5),
    borderRadius: theme.radius.lg,
    display: 'flex',
  },
  textContent: {
    margin: '16px',
  },
  dateText: {
    color: theme.colorScheme === 'light' ? theme.colors.gray[8] : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
  },
}));
