import {
  ActionIcon,
  Card,
  Center,
  Container,
  Text,
  Title,
  BackgroundImage,
  Badge,
  Flex,
  Stack,
} from '@mantine/core';
import { motion } from 'framer-motion';
import { IconBrandGithub } from '@tabler/icons-react';

import { AnimatedButtonWrapper } from '../AnimatedButtonWrapper';
import { useStyles } from '../cards.styles';

export const SimpleRainbow = () => {
  const { classes, cx } = useStyles();

  return (
    <motion.div whileHover={{ y: -10 }}>
      <Card shadow="sm" padding="md" radius="md" maw={'16rem'} withBorder>
        <Card.Section>
          <BackgroundImage
            src={require('./cardImages/rainbow-fitbit.png')}
            className={cx(classes.cardImage, classes.cardImageContain)}
            component={Flex}
            sx={{ backgroundColor: '#000' }}
          >
            <Stack align="flex-end" justify="flex-end" spacing={3}>
              <Badge>Fitbit</Badge>
              <Badge>JS</Badge>
              <Badge>Front-end</Badge>
            </Stack>
          </BackgroundImage>
        </Card.Section>
        <Container sx={{ padding: 0 }}>
          <Title order={2}>Simple Rainbow</Title>
          <Text size="sm" color="dimmed">
            Clean, simple, custom Fitbit clockface with time, date, battery % and real time
            heartrate display
          </Text>
          <Center>
            <AnimatedButtonWrapper>
              <a
                href="https://github.com/chattox/fitbit-custom-clock-faces/tree/main/simple-rainbow"
                target="_blank"
                rel="noopener"
              >
                <ActionIcon size="xl" variant="subtle" color="theme.primaryColor">
                  <IconBrandGithub size="xl" />
                </ActionIcon>
              </a>
            </AnimatedButtonWrapper>
          </Center>
        </Container>
      </Card>
    </motion.div>
  );
};
