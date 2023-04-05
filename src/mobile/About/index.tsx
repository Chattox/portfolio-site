import { Title, Text, Grid, Image, ActionIcon, Group } from '@mantine/core';

import { useStyles } from './index.styles';
import { aboutData } from '../../content/about/aboutData';
import { AnimatedButtonWrapper } from '../../components/AnimatedButtonWrapper';
import { IconBrandGithub, IconBrandLinkedin, IconMail } from '@tabler/icons-react';

const Icons: Record<string, JSX.Element> = {
  github: <IconBrandGithub string={24} />,
  linkedin: <IconBrandLinkedin string={24} />,
  gmail: <IconMail size={24} />,
};

export const About = () => {
  const { classes } = useStyles();

  return (
    <Grid columns={1} justify="center" className={classes.contentContainer}>
      <Grid.Col span="content">
        <Image src={aboutData.image} withPlaceholder maw={240} radius={120} alt="It me" />
      </Grid.Col>
      <Grid.Col span="content">
        <Title order={2}>{aboutData.title}</Title>
      </Grid.Col>
      <Grid.Col span={1}>
        {aboutData.content.map((p) => (
          <Text className={classes.text}>{p}</Text>
        ))}
      </Grid.Col>
      <Grid.Col span={1}>
        <Title order={2} className={classes.text} sx={{ paddingBottom: 0 }}>
          {aboutData.contactString}
        </Title>
      </Grid.Col>
      <Grid.Col>
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
      </Grid.Col>
    </Grid>
  );
};
