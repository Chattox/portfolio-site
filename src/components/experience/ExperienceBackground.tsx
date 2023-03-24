import { createStyles, useMantineColorScheme } from '@mantine/core';
import { ParallaxBanner } from 'react-scroll-parallax';

const useStyles = createStyles(() => ({
  container: {
    display: 'flex',
  },
  fullWidth: {
    width: '100%',
    height: '3000px',
  },
}));

export const ExperienceBackground = (props: { children: React.ReactNode }) => {
  const { classes, cx } = useStyles();
  const { colorScheme } = useMantineColorScheme();
  return (
    <ParallaxBanner
      layers={[
        {
          image:
            colorScheme === 'light'
              ? require('../../images/moon-splash-light.jpg')
              : require('../../images/moon-splash-dark.jpg'),
          speed: -100,
        },
        {
          children: props.children,
          speed: 15,
        },
      ]}
      className={cx(classes.container, classes.fullWidth)}
    />
  );
};
