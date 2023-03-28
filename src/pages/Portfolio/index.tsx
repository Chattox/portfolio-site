import { Container, Grid } from '@mantine/core';
import { motion } from 'framer-motion';

import { useStyles } from './index.styles';
import { Slavbot } from './cards/Slavbot';
import { HelpingHand } from './cards/HelpingHand';
import { Raddle } from './cards/Raddle';
import { SimpleRainbow } from './cards/SimpleRainbow';

const cardAnim = {
  initial: {
    y: -1000,
  },
  enterAnim: {
    y: 10,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const Portfolio = () => {
  const { classes } = useStyles();
  return (
    <Container className={classes.cardContainer} fluid>
      <motion.div initial="initial" animate="enterAnim" variants={cardAnim}>
        <Grid justify="space-evenly">
          <Grid.Col span="content">
            <motion.div variants={cardAnim}>
              <Slavbot />
            </motion.div>
          </Grid.Col>
          <Grid.Col span="content">
            <motion.div variants={cardAnim}>
              <HelpingHand />
            </motion.div>
          </Grid.Col>
          <Grid.Col span="content">
            <motion.div variants={cardAnim}>
              <Raddle />
            </motion.div>
          </Grid.Col>
          <Grid.Col span="content">
            <motion.div variants={cardAnim}>
              <SimpleRainbow />
            </motion.div>
          </Grid.Col>
        </Grid>
      </motion.div>
    </Container>
  );
};
