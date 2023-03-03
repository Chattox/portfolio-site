import { Container, Title, Tabs } from '@mantine/core';

import { About } from './content/About';
import { Portfolio } from './content/Portfolio';

export const Main = () => {
  return (
    <Container fluid={true}>
      <Title order={1}>Conrad Lineker-Jones</Title>
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
