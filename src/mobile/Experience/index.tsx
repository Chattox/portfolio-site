import { Flex, useMantineColorScheme } from '@mantine/core';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

import { expItemData } from '../../content/experience/expItemData';
import { ExperienceItem } from './ExperienceItem';
import { useStyles } from './index.styles';
import { IconMoonFilled, IconSunFilled } from '@tabler/icons-react';

export const Experience = () => {
  const { classes } = useStyles();
  const { colorScheme } = useMantineColorScheme();
  const { scrollYProgress } = useScroll();
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [1000, 0]), {
    stiffness: 150,
    damping: 20,
    restDelta: 0.001,
  });

  return (
    <Flex direction="column" align="center" className={classes.expContainer}>
      <motion.div style={{ y, display: 'flex', position: 'fixed', top: '20%' }}>
        {colorScheme === 'light' ? (
          <IconSunFilled className={classes.backgroundIcon} size={150} />
        ) : (
          <IconMoonFilled className={classes.backgroundIcon} size={150} />
        )}
      </motion.div>
      {expItemData.map((item) => (
        <ExperienceItem
          imgSrc={item.imgSrc}
          title={item.title}
          dates={item.dates}
          content={item.content}
        />
      ))}
    </Flex>
  );
};
