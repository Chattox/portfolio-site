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
import { IconBrandYoutube } from '@tabler/icons-react';

import { AnimatedButtonWrapper } from '../AnimatedButtonWrapper';
import { useStyles } from '../cards.styles';
import { getColor } from '../../utils/getColor';

export const HelpingHand = () => {
  const { classes, cx } = useStyles();

  return (
    <motion.div whileHover={{ y: -10 }}>
      <Card shadow="sm" padding="md" radius="md" maw={'16rem'} withBorder>
        <Card.Section>
          <BackgroundImage
            src={require('./cardImages/helpinghand-logo.png')}
            className={cx(classes.cardImage, classes.cardImageContain)}
            component={Flex}
            sx={{ backgroundColor: '#66BB6A' }}
          >
            <Stack align="flex-end" justify="flex-end" spacing={3}>
              <Badge>Mobile</Badge>
              <Badge>Dart</Badge>
              <Badge>JS</Badge>
              <Badge>Full-stack</Badge>
            </Stack>
          </BackgroundImage>
        </Card.Section>
        <Title order={2}>HelpingHand</Title>
        <Text size="sm" color="dimmed">
          Cross-platform mobile app helping the elderly and vulnerable with their shopping
        </Text>
        <Center>
          <AnimatedButtonWrapper>
            <a href="https://www.youtube.com/watch?v=0aof27FyHCc" target="_blank" rel="noopener">
              <ActionIcon size="xl" variant="subtle" color={getColor()}>
                <IconBrandYoutube size={48} />
              </ActionIcon>
            </a>
          </AnimatedButtonWrapper>
        </Center>
      </Card>
    </motion.div>
  );
};
