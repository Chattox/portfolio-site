import { Burger, Group, Header as MantineHeader, Title } from '@mantine/core';

import { useStyles } from './index.styles';
import { ThemeSwitcher } from '../../components/ThemeSwitcher';

interface HeaderProps {
  toggleOpen: () => void;
  isOpen: boolean;
}

export const Header = ({ toggleOpen, isOpen }: HeaderProps) => {
  const { classes } = useStyles();
  return (
    <MantineHeader height={'4rem'} className={classes.header}>
      <Group align="center" position="apart">
        <Group>
          <Burger opened={isOpen} onClick={toggleOpen} className={classes.navbarToggle} />
          <Title order={4} inline>
            Conrad Lineker-Jones
          </Title>
        </Group>
        <ThemeSwitcher size="lg" />
      </Group>
    </MantineHeader>
  );
};
