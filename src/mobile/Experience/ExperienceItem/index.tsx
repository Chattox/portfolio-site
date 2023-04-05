import { Grid, Image, Stack, Text, Title } from '@mantine/core';
import { useStyles } from './index.styles';

export interface MobileExperienceItemProps {
  imgSrc?: string;
  title: string;
  content: string;
  dates: string;
}

export const ExperienceItem = ({ imgSrc, title, content, dates }: MobileExperienceItemProps) => {
  const { classes } = useStyles();

  return (
    <Grid columns={3} justify="center" align="center" className={classes.expItem}>
      <Grid.Col span={1} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Image width={75} height={75} radius="lg" src={imgSrc} withPlaceholder />
      </Grid.Col>
      <Grid.Col span={2}>
        <Stack>
          <Title>{title}</Title>
          <Text className={classes.dateText}>{dates}</Text>
        </Stack>
      </Grid.Col>
      <Grid.Col span={3}>
        <Text>{content}</Text>
      </Grid.Col>
    </Grid>
  );
};
