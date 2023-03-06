import {
  ActionIcon,
  Card,
  Center,
  Container,
  Text,
  Title,
  Badge,
  BackgroundImage,
  Flex,
  Stack,
} from '@mantine/core';
import { motion } from 'framer-motion';
import { IconBrandGithub } from '@tabler/icons-react';

import { AnimatedButtonWrapper } from '../AnimatedButtonWrapper';
import { useStyles } from '../cards.styles';
import { getColor } from '../../utils/getColor';

export const Slavbot = () => {
  const { classes } = useStyles();
  return (
    <motion.div whileHover={{ y: -10 }}>
      <Card shadow="sm" padding="md" radius="md" maw={'16rem'} withBorder>
        <Card.Section>
          <BackgroundImage
            src={require('./cardImages/slavbot.jpg')}
            className={classes.cardImage}
            component={Flex}
          >
            <Stack align="flex-end" justify="flex-end" spacing={3}>
              <Badge>Discord</Badge>
              <Badge>JS</Badge>
              <Badge>Back-end</Badge>
            </Stack>
          </BackgroundImage>
        </Card.Section>
        <Container sx={{ padding: 0 }}>
          <Title order={2}>Slavbot</Title>
          <Text size="sm" color="dimmed">
            A modular, lightweight Discord bot with an easily expandable command structure
          </Text>
          <Center>
            <AnimatedButtonWrapper>
              <a href="https://github.com/chattox/slavbot_v3" target="_blank" rel="noopener">
                <ActionIcon size="xl" variant="subtle" color={getColor()}>
                  <IconBrandGithub size={48} />
                </ActionIcon>
              </a>
            </AnimatedButtonWrapper>
          </Center>
        </Container>
      </Card>
    </motion.div>
  );
};
