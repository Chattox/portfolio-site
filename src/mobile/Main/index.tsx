import { AppShell, Tabs, Drawer, Container } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import { Header } from './Header';
import { About } from '../About';
import { useStyles } from './index.styles';

export const Main = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const { classes } = useStyles();

  return (
    <Tabs defaultValue="about" orientation="vertical" variant="pills" keepMounted={false}>
      <AppShell
        padding="md"
        navbar={
          <Drawer opened={opened} onClose={close} className={classes.navbarDrawer}>
            <Tabs.List>
              <Tabs.Tab value="about" onClick={close}>
                About
              </Tabs.Tab>
              <Tabs.Tab value="experience" onClick={close}>
                Experience
              </Tabs.Tab>
              <Tabs.Tab value="portfolio" onClick={close}>
                Portfolio
              </Tabs.Tab>
            </Tabs.List>
          </Drawer>
        }
        header={<Header open={open} isOpen={opened} />}
      >
        <Container className={classes.contentContainer}>
          <Tabs.Panel value="about">
            <About />
          </Tabs.Panel>
          <Tabs.Panel value="experience">Experience</Tabs.Panel>
          <Tabs.Panel value="portfolio">Portfolio</Tabs.Panel>
        </Container>
      </AppShell>
    </Tabs>
  );
};
