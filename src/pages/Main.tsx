import { Container, Title, Tabs, createStyles, Group } from '@mantine/core';

import { ThemeSwitcher } from '../components/ThemeSwitcher';

import { About } from './content/About';
import { Portfolio } from './content/Portfolio';

const useStyles = createStyles(() => ({
  mainContainer: {
    padding: '0',
  },
}));

export const Main = () => {
  const { classes } = useStyles();
  return (
    <Container fluid={true} className={classes.mainContainer}>
      <Group>
        <Title order={1}>Conrad Lineker-Jones</Title>
        <ThemeSwitcher />
      </Group>
      <Tabs defaultValue="about">
        <Tabs.List>
          <Tabs.Tab value="about">About</Tabs.Tab>
          <Tabs.Tab value="portfolio">Portfolio</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="about">
          <About />
        </Tabs.Panel>

        <Tabs.Panel value="portfolio">
          <Portfolio />
        </Tabs.Panel>
      </Tabs>
    </Container>
  );
};
