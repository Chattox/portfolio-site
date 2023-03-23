import { createStyles } from '@mantine/core';

interface ExperienceStyles {
  side: 'left' | 'right';
}

export const useStyles = createStyles<string, ExperienceStyles>((theme, { side }) => ({
  expContainer: {
    width: 500,
    backgroundColor: theme.fn.rgba(theme.colors.gray[5], 0.5),
    borderRadius: theme.radius.lg,
    marginTop: 500,
    marginBottom: 500,
    justifyItems: side === 'left' ? 'right' : 'left',
  },
}));
