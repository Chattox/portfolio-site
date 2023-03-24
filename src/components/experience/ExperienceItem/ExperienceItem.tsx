import { Grid, Image, Stack, Text, Title } from '@mantine/core';
import { useStyles } from './ExperienceItem.styles';

export interface ExperienceItemProps {
  side?: 'left' | 'right';
  imgSrc?: string;
  title: string;
  content: string;
  dates: string;
}

export const ExperienceItem = ({ side, imgSrc, title, content, dates }: ExperienceItemProps) => {
  const { classes } = useStyles({ side: side });

  return (
    <Grid className={classes.expContainer}>
      <Grid.Col order={side === 'left' ? 2 : 1} span="content">
        <Image width={150} height={150} radius="lg" src={imgSrc} withPlaceholder />
      </Grid.Col>
      <Grid.Col order={side === 'left' ? 1 : 2} span="auto">
        <Stack className={classes.textContent}>
          <Stack spacing="0.25rem">
            <Title>{title}</Title>
            <Text c="dimmed" fz="sm">
              {dates}
            </Text>
          </Stack>
          <Text>{content}</Text>
        </Stack>
      </Grid.Col>
    </Grid>
  );
};
