import { createStyles, useMantineColorScheme } from '@mantine/core';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { IconMoonFilled, IconSunFilled } from '@tabler/icons-react';
import { ExperienceItem } from '../../components/experience/ExperienceItem/ExperienceItem';
import { expItemData } from '../../components/experience/ExperienceItem/expItemData';

const useStyles = createStyles((theme) => ({
  background: {
    position: 'absolute',
    background: theme.colorScheme === 'light' ? theme.colors.blue[3] : theme.colors.indigo[9],
    height: '100%',
    width: '100%',
  },
  alignCenter: {
    display: 'flex',
    alignItems: 'center',
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export const Experience = () => {
  const { classes } = useStyles();
  const { colorScheme } = useMantineColorScheme();
  return (
    <div className={classes.background}>
      <div className={classes.background} />
      <Parallax pages={expItemData.length} style={{ display: 'flex' }}>
        <ParallaxLayer
          sticky={{ start: 0, end: 4 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
          }}
        >
          {colorScheme === 'light' ? (
            <IconSunFilled color="yellow" size={150} />
          ) : (
            <IconMoonFilled color="blue" size={150} />
          )}
        </ParallaxLayer>
        {expItemData.map((item, i) => (
          <ParallaxLayer
            offset={i}
            speed={i + 1}
            style={{
              display: 'flex',
              flexGrow: 0,
              justifyContent: i % 2 === 0 ? 'flex-start' : 'flex-end',
              alignContent: 'center',
              alignItems: 'center',
            }}
          >
            <ExperienceItem
              side={i % 2 === 0 ? 'left' : 'right'}
              imgSrc={item.imgSrc}
              title={item.title}
              content={item.content}
              dates={item.dates}
            />
          </ParallaxLayer>
        ))}
      </Parallax>
    </div>
  );
};
