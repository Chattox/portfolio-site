import { Burger, Group, Header as MantineHeader, Title } from '@mantine/core';

import { useStyles } from './index.styles';
import { ThemeSwitcher } from '../../components/ThemeSwitcher';

interface HeaderProps {
  open: () => void;
  isOpen: boolean;
}

export const Header = ({ open, isOpen }: HeaderProps) => {
  const { classes } = useStyles();
  return (
    <MantineHeader height={'4rem'}>
      <Group align="center" position="apart">
        <Group>
          <Burger opened={isOpen} onClick={open} className={classes.navbarToggle} />
          <Title order={4} inline>
            Conrad Lineker-Jones
          </Title>
        </Group>
        <ThemeSwitcher size="lg" />
      </Group>
    </MantineHeader>
  );
};
