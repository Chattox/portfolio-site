import { AppShell, Navbar, Header } from '@mantine/core';

export const Main = () => {
  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar width={{ base: 300 }} height={500} p="xs">
          Navbar
        </Navbar>
      }
      header={
        <Header height={60} p="xs">
          Header
        </Header>
      }
    >
      Main
    </AppShell>
  );
};
