import {
  MantineProvider,
  createStyles,
  Title,
  Text,
  Container,
} from '@mantine/core';
import { lightTheme, darkTheme } from './themes';

const useStyles = createStyles((theme) => ({
  'text-body': {
    textAlign: 'center',
  },
}));

export default function App() {
  const { classes } = useStyles();
  return (
    <MantineProvider theme={lightTheme} withGlobalStyles withNormalizeCSS>
      <Container className={classes['text-body']} fluid={true}>
        <Title order={1}>Conrad Lineker-Jones</Title>
        <Text>
          Junior front-end developer at{' '}
          <a href="https://amplience.com">Amplience</a> since 2021
        </Text>
      </Container>
    </MantineProvider>
  );
}
