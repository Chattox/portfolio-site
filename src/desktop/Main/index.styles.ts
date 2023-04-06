import { createStyles } from '@mantine/core';

export const useStyles = createStyles(() => ({
  mainContainer: {
    padding: '0',
  },
  title: {
    padding: '0.5rem',
  },
  logo: {
    marginTop: '0.5rem',
    marginLeft: '0.5rem',
  },
  tabList: {
    // fix for tab bottom borders not transitioning properly for some reason
    transition: 'border-bottom-color 0.3s',
  },
}));
