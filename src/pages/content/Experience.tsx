import { createStyles, Flex, useMantineColorScheme } from '@mantine/core';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { IconMoonFilled, IconSunFilled } from '@tabler/icons-react';
import { ExperienceItem } from '../../components/experience/ExperienceItem/ExperienceItem';
import { expItemData } from '../../components/experience/ExperienceItem/expItemData';

const useStyles = createStyles((theme) => ({
  background: {
    position: 'absolute',
    background: theme.colorScheme === 'light' ? theme.colors.blue[3] : theme.colors.indigo[9],
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
  backgroundIcon: {
    color: theme.colorScheme === 'light' ? theme.colors.yellow[5] : theme.colors.blue[1],
  },
}));

export const Experience = () => {
  const { classes } = useStyles();
  const { colorScheme } = useMantineColorScheme();
  const { scrollYProgress } = useScroll();
  const rotate = useSpring(useTransform(scrollYProgress, [0, 1], [-90, 90]), {
    stiffness: 150,
    damping: 20,
    restDelta: 0.001,
  });

  return (
    <Flex direction="column" align="center" className={classes.background}>
      <motion.div style={{ rotate, display: 'flex', position: 'fixed', top: '0%', height: '175%' }}>
        {colorScheme === 'light' ? (
          <IconSunFilled className={classes.backgroundIcon} size={150} />
        ) : (
          <IconMoonFilled className={classes.backgroundIcon} size={150} />
        )}
      </motion.div>
      {expItemData.map((item, i) => (
        <ExperienceItem
          side={i % 2 === 0 ? 'left' : 'right'}
          imgSrc={item.imgSrc}
          title={item.title}
          content={item.content}
          dates={item.dates}
        />
      ))}
    </Flex>
  );
};
