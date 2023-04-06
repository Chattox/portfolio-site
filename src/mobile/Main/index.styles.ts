import { createStyles } from '@mantine/core';

export const useStyles = createStyles(() => ({
  header: {
    zIndex: 999,
  },
  navbarDrawer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  navbarContent: {
    paddingTop: '1rem',
  },
  navbarToggle: {
    marginLeft: '1rem',
  },
  contentContainer: {
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
  },
  logo: {
    alignSelf: 'center',
    marginTop: '2rem',
    marginBottom: '2rem',
  },
  drawerLogo: {
    marginTop: '10rem',
    alignSelf: 'center',
  },
}));
