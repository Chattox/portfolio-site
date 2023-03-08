import { Container, Title, Tabs, createStyles, Group } from '@mantine/core';

import { ThemeSwitcher } from '../components/ThemeSwitcher';

import { About } from './content/About';
import { Experience } from './content/Experience';
import { Portfolio } from './content/Portfolio';

const useStyles = createStyles(() => ({
  mainContainer: {
    padding: '0',
  },
  title: {
    padding: '16px',
  },
  tab: {
    // fix for tab bottom borders not transitioning properly for some reason
    transition: 'border-bottom-color 0.3s',
  },
}));

export const Main = () => {
  const { classes } = useStyles();
  return (
    <Container fluid={true} className={classes.mainContainer}>
      <Group position="apart">
        <Title order={1} size="60" inline={true} className={classes.title} data-testid="header">
          Conrad Lineker-Jones
        </Title>
        <ThemeSwitcher />
      </Group>
      <Tabs defaultValue="about" keepMounted={false}>
        <Tabs.List className={classes.tab}>
          <Tabs.Tab value="about">About</Tabs.Tab>
          <Tabs.Tab value="experience">Experience</Tabs.Tab>
          <Tabs.Tab value="portfolio">Portfolio</Tabs.Tab>
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
      </Tabs>
    </Container>
  );
};
