import { createStyles, useMantineColorScheme } from '@mantine/core';
import { Parallax } from 'react-scroll-parallax';
import { IconSunFilled, IconMoonFilled } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  parallaxContainer: {
    display: 'flex',
    backgroundColor: theme.colorScheme === 'light' ? theme.colors.blue[3] : theme.colors.indigo[9],
  },
  parallaxItem: {
    zIndex: 0,
    color: theme.colorScheme === 'light' ? theme.colors.yellow[5] : theme.colors.blue[0],
    height: '100%',
    position: 'absolute',
    top: '50%',
    left: '50%',
  },
}));

export const ExperienceBackground = (props: { children: React.ReactNode }) => {
  const { classes } = useStyles();
  const { colorScheme } = useMantineColorScheme();
  return (
    <div className={classes.parallaxContainer}>
      <Parallax className={classes.parallaxItem} rotate={[-100, 90]}>
        {colorScheme === 'light' ? <IconSunFilled size={150} /> : <IconMoonFilled size={150} />}
      </Parallax>
      {props.children}
    </div>
  );
};
