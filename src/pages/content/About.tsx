import { Container, createStyles, Group, Text, Title, Image, ActionIcon } from '@mantine/core';
import { IconBrandGithub, IconBrandLinkedin, IconMail } from '@tabler/icons-react';
import { AnimatedButtonWrapper } from '../../components/AnimatedButtonWrapper';

const useStyles = createStyles(() => ({
  bgImage: {
    height: '33vh',
  },
  text: {
    textAlign: 'left',
    padding: '16px',
  },
  textContainer: {
    margin: '25px 0 0 0',
  },
  profilePicture: {
    margin: '25px 0px 25px 50px',
  },
}));

export const About = () => {
  const { classes } = useStyles();

  return (
    <Group position="left" align="start" spacing="10%">
      <Image
        src={require('../../images/rad-face.jpg')}
        withPlaceholder
        maw={240}
        radius={120}
        alt="It me"
        className={classes.profilePicture}
      />
      <Container className={classes.textContainer}>
        <Title order={1} className={classes.text}>
          Hi, I'm Conrad
        </Title>
        <Text className={classes.text}>
          I'm a driven, quick learning, junior software engineer currently working with React,
          Typescript, and Javascript as a front end developer. My diverse background across a wide
          range of problem solving situations and long history working with computers allows me to
          approach issues in an effective and practical manner.
        </Text>
        <Text className={classes.text}>
          Over the years I've had the opportunity to work on a wide range of projects, from personal
          hobby pieces to enterprise level software. I've learned a lot along the way about what it
          takes to build successful software, and I'm always eager to keep learning and growing.
        </Text>
        <Text className={classes.text}>
          When I'm not coding, you can usually find me tinkering with integrated tech (think
          Raspberry Pi, Arduinos, etc) or working on personal projects. I'm a big believer in the
          power of side projects to help you stay curious, constantly learning, and engaged with the
          world of technology.
        </Text>
        <Text className={classes.text}>
          In my free time I enjoy painting miniatures, spending time with family and friends, and
          seeking out more weird niche prog bands. I'm always up for trying new restaurants or
          checking out a new museum exhibit.
        </Text>
        <Text className={classes.text}>
          I'm excited to share some of my work with you through this portfolio. I hope you find it
          interesting; if you have any questions or just want to talk shop, please feel free to drop
          me a line!
        </Text>
        <Text className={classes.text}>Cheers!</Text>
        <Title order={2} className={classes.text}>
          Contact me:
        </Title>
        <Group>
          <AnimatedButtonWrapper>
            <a href="https://github.com/chattox" target="_blank" rel="noopener">
              <ActionIcon size="xl" variant="outline" color="theme.primaryColor">
                <IconBrandGithub />
              </ActionIcon>
            </a>
          </AnimatedButtonWrapper>
          <AnimatedButtonWrapper>
            <a href="https://linkedin.com/in/chattox" target="_blank" rel="noopener">
              <ActionIcon size="xl" variant="outline" color="theme.primaryColor">
                <IconBrandLinkedin />
              </ActionIcon>
            </a>
          </AnimatedButtonWrapper>
          <AnimatedButtonWrapper>
            <a
              href="mailto:conradlineker@gmail.com?subject=I love your portfolio!"
              target="_blank"
              rel="noopener"
            >
              <ActionIcon size="xl" variant="outline" color="theme.primaryColor">
                <IconMail />
              </ActionIcon>
            </a>
          </AnimatedButtonWrapper>
        </Group>
      </Container>
    </Group>
  );
};
