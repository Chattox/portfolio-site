import { Container, createStyles, Grid } from '@mantine/core';
import { Slavbot } from '../../components/cards/Slavbot';
import { HelpingHand } from '../../components/cards/HelpingHand';
import { Raddle } from '../../components/cards/Raddle';

const useStyles = createStyles(() => ({
  cardContainer: {
    paddingTop: '16px',
  },
}));

export const Portfolio = () => {
  const { classes } = useStyles();
  return (
    <Container className={classes.cardContainer} fluid>
      <Grid justify="space-evenly">
        <Grid.Col span="content">
          <Slavbot />
        </Grid.Col>
        <Grid.Col span="content">
          <HelpingHand />
        </Grid.Col>
        <Grid.Col span="content">
          <Raddle />
        </Grid.Col>
      </Grid>
    </Container>
  );
};
