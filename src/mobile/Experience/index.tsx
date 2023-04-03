import { Flex } from '@mantine/core';
import { expItemData } from '../../content/experience/expItemData';
import { ExperienceItem } from './ExperienceItem';
import { useStyles } from './index.styles';

export const Experience = () => {
  const { classes } = useStyles();

  return (
    <Flex direction="column" className={classes.expContainer}>
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
