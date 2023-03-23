import { Group, Image, Stack, Text, Title } from '@mantine/core';
import { useStyles } from './ExperienceItem.styles';

export interface ExperienceItemProps {
  side: 'left' | 'right';
  imgSrc?: string;
  title: string;
  content: string;
}

export const ExperienceItem = ({ side, imgSrc, title, content }: ExperienceItemProps) => {
  const { classes } = useStyles({ side: side });

  return (
    <Group className={classes.expContainer}>
      <Image width={150} height={150} radius="lg" src={imgSrc} withPlaceholder />
      <Stack>
        <Title>{title}</Title>
        <Text>{content}</Text>
      </Stack>
    </Group>
  );
};
