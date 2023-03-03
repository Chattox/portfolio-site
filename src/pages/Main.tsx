import { Container, Title, Tabs, createStyles, Group } from '@mantine/core';

import { ThemeSwitcher } from '../components/ThemeSwitcher';

import { About } from './content/About';
import { Contact } from './content/Contact';
import { Experience } from './content/Experience';
import { Portfolio } from './content/Portfolio';

const useStyles = createStyles(() => ({
  mainContainer: {
    padding: '0',
  },
  title: {
    padding: '16px',
  },
}));

export const Main = () => {
  const { classes } = useStyles();
  return (
    <Container fluid={true} className={classes.mainContainer}>
      <Group position="apart">
        <Title order={1} size="60" inline={true} className={classes.title}>
          Conrad Lineker-Jones
        </Title>
        <ThemeSwitcher />
      </Group>
      <Tabs defaultValue="about">
        <Tabs.List>
          <Tabs.Tab value="about">About</Tabs.Tab>
          <Tabs.Tab value="experience">Experience</Tabs.Tab>
          <Tabs.Tab value="portfolio">Portfolio</Tabs.Tab>
          <Tabs.Tab value="contact">Contact</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="about">
          <About />
        </Tabs.Panel>

        <Tabs.Panel value="experience">
          <Experience />
        </Tabs.Panel>

        <Tabs.Panel value="portfolio">
          <Portfolio />
        </Tabs.Panel>

        <Tabs.Panel value="contact">
          <Contact />
        </Tabs.Panel>
      </Tabs>
    </Container>
  );
};
