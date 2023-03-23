import { createStyles } from '@mantine/core';

interface ExperienceStyles {
  side?: 'left' | 'right';
}

export const useStyles = createStyles<string, ExperienceStyles>((theme, { side }) => ({
  expContainer: {
    width: 500,
    backgroundColor: theme.fn.rgba(theme.colors.gray[5], 0.5),
    borderRadius: theme.radius.lg,
    marginTop: 250,
    marginRight: '20%',
    marginBottom: 250,
    marginLeft: '20%',
    alignSelf: side === 'left' ? 'flex-start' : 'flex-end',
  },
}));
