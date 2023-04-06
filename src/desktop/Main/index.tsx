import { Container, Title, Tabs, Group } from '@mantine/core';

import { useStyles } from './index.styles';
import { Bindrune } from '../../content/main/images/bindrune';
import { ThemeSwitcher } from '../../components/ThemeSwitcher';
import { About } from '../About';
import { Experience } from '../Experience';
import { Portfolio } from '../Portfolio';

export const Main = () => {
  const { classes } = useStyles();

  return (
    <Container sx={{ height: '100%' }} fluid={true} className={classes.mainContainer}>
      <Group position="apart">
        <Group>
          <Bindrune height="6rem" width="6rem" strokeWidth="4rem" className={classes.logo} />
          <Title order={1} size="60" inline={true} className={classes.title} data-testid="header">
            Conrad Lineker-Jones
          </Title>
        </Group>
        <ThemeSwitcher size="xl" />
      </Group>
      <Tabs defaultValue="about" keepMounted={false}>
        <Tabs.List className={classes.tabList}>
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
