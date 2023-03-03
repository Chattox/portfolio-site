import { Container, createStyles, List, Text, Title } from '@mantine/core';
import { ParallaxBanner } from 'react-scroll-parallax';

const useStyles = createStyles(() => ({
  bgImage: {
    height: '33vh',
  },
  text: {
    textAlign: 'center',
    padding: '16px',
  },
  container: {
    padding: '0',
  },
}));

export const About = () => {
  const { classes } = useStyles();
  return (
    <Container fluid={true} className={classes.container}>
      <ParallaxBanner
        layers={[{ image: require('../../images/splash.jpg'), speed: -15 }]}
        className={classes.bgImage}
      />
      <Container fluid={true}>
        <Title order={1} className={classes.text}>
          TL;DR
        </Title>
        <Text className={classes.text}>
          I am a driven, quick learning, junior software engineer currently working with React,
          Typescript, and Javascript as a front end developer. My diverse background across a wide
          range of problem solving situations and long history working with computers allows me to
          approach issues in an effective and practical manner.
        </Text>
        <Title order={2} className={classes.text}>
          My experience:
        </Title>
        <List className={classes.text}>
          <List.Item>
            <b>2021 - present:</b> Junior Front-end Software Engineer at{' '}
            <a href="https://amplience.com" target="_blank" rel="noopener noreferrer">
              Amplience
            </a>
          </List.Item>
          <List.Item>
            <b>2021:</b> Junior Back-end Software Engineer at{' '}
            <a href="https://footballpools.com" target="_blank" rel="noopener noreferrer">
              The Football Pools
            </a>
          </List.Item>
          <List.Item>
            <b>2020 - 2021:</b> Full stack Junior Developer at{' '}
            <a href="https://uktotegroup.com" target="_blank" rel="noopener noreferrer">
              UK Tote Group
            </a>
          </List.Item>
          <List.Item>
            <b>2020:</b>{' '}
            <a href="https://northcoders.com" target="_blank" rel="noopener noreferrer">
              Northcoders
            </a>{' '}
            graduate
          </List.Item>
        </List>
      </Container>
    </Container>
  );
};
