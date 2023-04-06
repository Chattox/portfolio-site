import { AppShell, Tabs, Drawer, Container } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import { Header } from './Header';
import { About } from '../About';
import { useStyles } from './index.styles';
import { Experience } from '../Experience';
import { Portfolio } from '../Portfolio';
import { Bindrune } from '../../content/main/images/bindrune';
import { useState } from 'react';

export const Main = () => {
  const [activeTab, setActiveTab] = useState<string | null>('about');
  const [opened, { toggle }] = useDisclosure(false);
  const { classes } = useStyles();

  return (
    <Tabs
      defaultValue="about"
      value={activeTab}
      onTabChange={setActiveTab}
      orientation="vertical"
      variant="pills"
      keepMounted={false}
    >
      <AppShell
        padding={0}
        navbar={
          <Drawer opened={opened} onClose={toggle} classNames={{ body: classes.navbarDrawer }}>
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
            <Bindrune
              width="6rem"
              height="6rem"
              strokeWidth="4rem"
              className={classes.drawerLogo}
            />
          </Drawer>
        }
        header={<Header toggleOpen={toggle} isOpen={opened} />}
        // footer={
        //   <Footer height="5rem" p="xs">
        //     <Bindrune width="100%" height="100%" strokeWidth="5rem" />
        //   </Footer>
        // }
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
          {activeTab !== 'experience' ? (
            <Bindrune width="5rem" height="5rem" strokeWidth="4rem" className={classes.logo} />
          ) : null}
        </Container>
      </AppShell>
    </Tabs>
  );
};
