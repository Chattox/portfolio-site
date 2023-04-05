import { AppShell, Tabs, Drawer, Container } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import { Header } from './Header';
import { About } from '../About';
import { useStyles } from './index.styles';
import { Experience } from '../Experience';
import { Portfolio } from '../Portfolio';

export const Main = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const { classes } = useStyles();

  return (
    <Tabs defaultValue="about" orientation="vertical" variant="pills" keepMounted={false}>
      <AppShell
        padding={0}
        navbar={
          <Drawer opened={opened} onClose={toggle} className={classes.navbarDrawer}>
            <Tabs.List className={classes.navbarContent}>
              <Tabs.Tab value="about" onClick={toggle}>
                About
              </Tabs.Tab>
              <Tabs.Tab value="experience" onClick={toggle}>
                Experience
              </Tabs.Tab>
              <Tabs.Tab value="portfolio" onClick={toggle}>
                Portfolio
              </Tabs.Tab>
            </Tabs.List>
          </Drawer>
        }
        header={<Header toggleOpen={toggle} isOpen={opened} />}
      >
        <Container className={classes.contentContainer}>
          <Tabs.Panel value="about">
            <About />
          </Tabs.Panel>
          <Tabs.Panel value="experience">
            <Experience />
          </Tabs.Panel>
          <Tabs.Panel value="portfolio">
            <Portfolio />
          </Tabs.Panel>
        </Container>
      </AppShell>
    </Tabs>
  );
};
