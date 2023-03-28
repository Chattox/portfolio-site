import {
  ActionIcon,
  Card,
  Center,
  Text,
  Title,
  BackgroundImage,
  Badge,
  Flex,
  Stack,
} from '@mantine/core';
import { motion } from 'framer-motion';
import { IconBrandGithub } from '@tabler/icons-react';

import { AnimatedButtonWrapper } from '../../../components/AnimatedButtonWrapper';
import { useStyles } from './cards.styles';
import { getColor } from '../../../utils/getColor';

export const Raddle = () => {
  const { classes, cx } = useStyles();

  return (
    <motion.div whileHover={{ y: -10 }}>
      <Card shadow="sm" padding="md" radius="md" maw={'16rem'} withBorder>
        <Card.Section>
          <BackgroundImage
            src={require('./cardImages/raddle.png')}
            className={cx(classes.cardImage, classes.cardImageContain)}
            component={Flex}
            sx={{ backgroundColor: '#FFF' }}
          >
            <Stack align="flex-end" justify="flex-end" spacing={3}>
              <Badge>Webapp</Badge>
              <Badge>React</Badge>
              <Badge>JS</Badge>
              <Badge>Front-end</Badge>
            </Stack>
          </BackgroundImage>
        </Card.Section>
        <Title order={2}>Raddle</Title>
        <Text size="sm" color="dimmed">
          A Wordle clone built in React, because all the cool kids are doing it these days
        </Text>
        <Center>
          <AnimatedButtonWrapper>
            <a href="https://github.com/chattox/raddle" target="_blank" rel="noopener">
              <ActionIcon size="xl" variant="subtle" color={getColor()}>
                <IconBrandGithub size={48} />
              </ActionIcon>
            </a>
          </AnimatedButtonWrapper>
        </Center>
      </Card>
    </motion.div>
  );
};
