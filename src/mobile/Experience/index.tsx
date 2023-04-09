import { Flex, useMantineColorScheme } from '@mantine/core';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

import { expItemData } from '../../content/experience/expItemData';
import { ExperienceItem } from './ExperienceItem';
import { useStyles } from './index.styles';
import { IconCloudFilled, IconMoonFilled, IconSunFilled } from '@tabler/icons-react';
import { ScrollToTop } from '../../components/ScrollToTop';

export const Experience = () => {
  const { classes } = useStyles();
  const { colorScheme } = useMantineColorScheme();
  const { scrollYProgress } = useScroll();
  const sunMoonAnim = useSpring(useTransform(scrollYProgress, [0, 1], [1000, 0]), {
    stiffness: 150,
    damping: 20,
    restDelta: 0.001,
  });
  const cloudAnimLeft = useSpring(useTransform(scrollYProgress, [0, 1], [0, 500]), {
    stiffness: 150,
    damping: 20,
    restDelta: 0.001,
  });
  const cloudAnimRight = useSpring(useTransform(scrollYProgress, [0, 1], [0, -500]), {
    stiffness: 150,
    damping: 20,
    restDelta: 0.001,
  });

  return (
    <Flex direction="column" align="center" className={classes.expContainer}>
      <motion.div
        style={{ x: cloudAnimLeft, display: 'flex', position: 'fixed', top: '18%', left: '35%' }}
      >
        <IconCloudFilled className={classes.backgroundCloudBack} size={200} />
      </motion.div>
      <motion.div
        style={{ x: cloudAnimRight, display: 'flex', position: 'fixed', top: '22%', left: '20%' }}
      >
        <IconCloudFilled className={classes.backgroundCloudFront} size={175} />
      </motion.div>
      <motion.div style={{ y: sunMoonAnim, display: 'flex', position: 'fixed', top: '15%' }}>
        {colorScheme === 'light' ? (
          <IconSunFilled className={classes.backgroundSunMoon} size={150} />
        ) : (
          <IconMoonFilled className={classes.backgroundSunMoon} size={150} />
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
      <ScrollToTop triggerPoint={300} bottom="2rem" right="2rem" />
    </Flex>
  );
};
