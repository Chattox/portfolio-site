import { ActionIcon, Card, Center, Image, Text, Title } from '@mantine/core';
import { IconBrandYoutube } from '@tabler/icons-react';
import { AnimatedButtonWrapper } from '../AnimatedButtonWrapper';

export const HelpingHand = () => {
  return (
    <Card shadow="sm" padding="md" radius="md" maw={'16rem'} withBorder>
      <Card.Section>
        <Image
          src={require('./cardImages/helpinghand-logo.png')}
          height={160}
          alt="HelpingHand"
          withPlaceholder
          fit="contain"
          sx={{ backgroundColor: '#66BB6A' }}
        />
      </Card.Section>
      <Title order={2}>HelpingHand</Title>
      <Text size="sm" color="dimmed">
        Cross-platform mobile app helping the elderly and vulnerable with their shopping
      </Text>
      <Center>
        <AnimatedButtonWrapper>
          <a href="https://www.youtube.com/watch?v=0aof27FyHCc" target="_blank" rel="noopener">
            <ActionIcon size="xl" variant="subtle" color="theme.primaryColor">
              <IconBrandYoutube size="xl" />
            </ActionIcon>
          </a>
        </AnimatedButtonWrapper>
      </Center>
    </Card>
  );
};
