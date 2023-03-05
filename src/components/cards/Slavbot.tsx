import { ActionIcon, Card, Center, Container, Image, Text, Title } from '@mantine/core';
import { IconBrandGithub } from '@tabler/icons-react';
import { AnimatedButtonWrapper } from '../AnimatedButtonWrapper';

export const Slavbot = () => {
  return (
    <Card shadow="sm" padding="md" radius="md" maw={'16rem'} withBorder>
      <Card.Section>
        <Image
          src={require('./cardImages/slavbot.jpg')}
          height={160}
          alt="Slavbot"
          withPlaceholder
        />
      </Card.Section>
      <Container sx={{ padding: 0 }}>
        <Title order={2}>Slavbot</Title>
        <Text size="sm" color="dimmed">
          A modular, lightweight Discord bot with an easily expandable command structure
        </Text>
        <Center>
          <AnimatedButtonWrapper>
            <a href="https://github.com/chattox/slavbot_v3" target="_blank" rel="noopener">
              <ActionIcon size="xl" variant="subtle" color="theme.primaryColor">
                <IconBrandGithub size="xl" />
              </ActionIcon>
            </a>
          </AnimatedButtonWrapper>
        </Center>
      </Container>
    </Card>
  );
};
