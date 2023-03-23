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
    marginTop: 250,
    marginRight: '10%',
    marginBottom: 250,
    marginLeft: '10%',
    alignSelf: side === 'left' ? 'flex-start' : 'flex-end',
  },
  textContent: {
    margin: '16px',
  },
}));
