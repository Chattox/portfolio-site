import { Flex, useMantineColorScheme } from '@mantine/core';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { IconMoonFilled, IconSunFilled } from '@tabler/icons-react';

import { useStyles } from './index.styles';
import { ExperienceItem } from './ExperienceItem';
import { expItemData } from '../../content/experience/expItemData';
import { ScrollToTop } from '../../components/ScrollToTop';

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
          firstOrLast={i === 0 ? 'first' : i === expItemData.length - 1 ? 'last' : undefined}
          imgSrc={item.imgSrc}
          title={item.title}
          content={item.content}
          dates={item.dates}
          id={item.id}
          prevId={i === 0 ? undefined : expItemData[i - 1].id}
          nextId={i >= expItemData.length - 1 ? undefined : expItemData[i + 1].id}
        />
      ))}
      <ScrollToTop triggerPoint={750} bottom="2rem" left="2rem" />
    </Flex>
  );
};
