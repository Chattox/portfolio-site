import { Parallax } from 'react-parallax';
import { createStyles, useMantineColorScheme } from '@mantine/core';

const useStyles = createStyles(() => ({
  container: {
    display: 'flex',
  },
  fullWidth: {
    width: '100%',
  },
}));

export const ExperienceBackground = (props: { children: React.ReactNode }) => {
  const { classes } = useStyles();
  const { colorScheme } = useMantineColorScheme();
  return (
    <Parallax
      contentClassName={classes.fullWidth}
      bgImage={
        colorScheme === 'light'
          ? require('../../images/moon-splash-light.jpg')
          : require('../../images/moon-splash-dark.jpg')
      }
      strength={1000}
    >
      {props.children}
    </Parallax>
  );
};
