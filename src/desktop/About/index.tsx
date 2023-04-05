import { Container, Group, Text, Title, Image, ActionIcon } from '@mantine/core';
import { IconBrandGithub, IconBrandLinkedin, IconMail } from '@tabler/icons-react';

import { aboutData } from '../../content/about/aboutData';
import { useStyles } from './index.styles';
import { AnimatedButtonWrapper } from '../../components/AnimatedButtonWrapper';

const Icons: Record<string, JSX.Element> = {
  github: <IconBrandGithub size={48} />,
  linkedin: <IconBrandLinkedin size={48} />,
  gmail: <IconMail size={48} />,
};

export const About = () => {
  const { classes } = useStyles();

  return (
    <Group position="left" align="start" spacing="10%">
      <Image
        src={aboutData.image}
        withPlaceholder
        maw={240}
        radius={120}
        alt="It me"
        className={classes.profilePicture}
      />
      <Container className={classes.textContainer}>
        <Title order={1} className={classes.text}>
          {aboutData.title}
        </Title>
        {aboutData.content.map((p) => (
          <Text className={classes.text}>{p}</Text>
        ))}
        <Title order={2} className={classes.text}>
          {aboutData.contactString}
        </Title>
        <Group>
          {aboutData.contactDetails.map((contact) => (
            <AnimatedButtonWrapper>
              <a href={contact.url} target="_blank" rel="noopener noreferrer nofollow">
                <ActionIcon size="xl" variant="outline" color="theme.primaryColor">
                  {Icons[contact.icon]}
                </ActionIcon>
              </a>
            </AnimatedButtonWrapper>
          ))}
        </Group>
      </Container>
    </Group>
  );
};
