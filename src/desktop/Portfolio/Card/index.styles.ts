import { createStyles } from '@mantine/core';

export const useStyles = createStyles(() => ({
  cardImage: {
    height: 160,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: '10px',
  },
  cardImageContain: {
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
  },
}));
