import { ActionIcon, Card, Center, Image, Text, Title } from '@mantine/core';
import { motion } from 'framer-motion';
import { IconBrandGithub } from '@tabler/icons-react';
import { AnimatedButtonWrapper } from '../AnimatedButtonWrapper';

export const Raddle = () => {
  return (
    <motion.div whileHover={{ y: -10 }}>
      <Card shadow="sm" padding="md" radius="md" maw={'16rem'} withBorder>
        <Card.Section>
          <Image
            src={require('./cardImages/raddle.png')}
            height={160}
            alt="Raddle"
            fit="contain"
            withPlaceholder
          />
        </Card.Section>
        <Title order={2}>Raddle</Title>
        <Text size="sm" color="dimmed">
          A Wordle clone built in React, because all the cool kids are doing it these days
        </Text>
        <Center>
          <AnimatedButtonWrapper>
            <a href="https://github.com/chattox/raddle" target="_blank" rel="noopener">
              <ActionIcon size="xl" variant="subtle" color="theme.primaryColor">
                <IconBrandGithub size="xl" />
              </ActionIcon>
            </a>
          </AnimatedButtonWrapper>
        </Center>
      </Card>
    </motion.div>
  );
};
