import { Burger, Group, Header as MantineHeader, Title } from '@mantine/core';
import { ThemeSwitcher } from '../../components/ThemeSwitcher';

interface HeaderProps {
  open: () => void;
  isOpen: boolean;
}

export const Header = ({ open, isOpen }: HeaderProps) => {
  return (
    <MantineHeader height={'4rem'}>
      <Group sx={{ height: '100%', paddingLeft: '1rem' }} align="center" position="apart">
        <Group>
          <Burger opened={isOpen} onClick={open} />
          <Title order={4} inline>
            Conrad Lineker-Jones
          </Title>
        </Group>
        <ThemeSwitcher size="lg" />
      </Group>
    </MantineHeader>
  );
};
