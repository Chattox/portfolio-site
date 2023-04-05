import { Container, Grid } from '@mantine/core';
import { motion } from 'framer-motion';

import { useStyles } from './index.styles';
import { PortfolioCard } from './Card';
import { portfolioData, PortfolioProps } from '../../content/portfolio/portfolioData';

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
          {portfolioData.map((card: PortfolioProps) => (
            <Grid.Col span="content">
              <motion.div variants={cardAnim}>
                <PortfolioCard
                  imgSrc={card.imgSrc}
                  tags={card.tags}
                  title={card.title}
                  description={card.description}
                  links={card.links}
                  imageContain={card.imageContain}
                  bgColor={card.bgColor}
                />
              </motion.div>
            </Grid.Col>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
};
