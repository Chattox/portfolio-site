import { Avatar, Group, Stack, Text, useMantineTheme } from '@mantine/core';

interface LabelProps {
  imgSrc: Record<string, string>;
  title: string;
  tagline?: string;
}

export const Label = ({ imgSrc, title, tagline }: LabelProps) => {
  const theme = useMantineTheme();
  return (
    <Group noWrap>
      <Avatar
        src={theme.colorScheme === 'light' ? imgSrc.light : imgSrc.dark}
        radius="xl"
        size="lg"
      />
      <Stack>
        <Text>{title}</Text>
        <Text size="sm" color="dimmed" weight={400}>
          {tagline}
        </Text>
      </Stack>
    </Group>
  );
};
