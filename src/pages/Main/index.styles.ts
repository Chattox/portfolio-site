import { createStyles } from '@mantine/core';

export const useStyles = createStyles(() => ({
  mainContainer: {
    padding: '0',
  },
  title: {
    padding: '16px',
  },
  'tab-container': {
    width: '100vw',
  },
  'tab-list': {
    // fix for tab bottom borders not transitioning properly for some reason
    transition: 'border-bottom-color 0.3s',
  },
}));
