import { Avatar, Group, Stack, Text } from '@mantine/core';

interface LabelProps {
  imgSrc: string;
  title: string;
  tagline?: string;
}

export const Label = ({ imgSrc, title, tagline }: LabelProps) => {
  return (
    <Group noWrap>
      <Avatar src={imgSrc} radius="xl" size="lg" />
      <Stack>
        <Text>{title}</Text>
        <Text size="sm" color="dimmed" weight={400}>
          {tagline}
        </Text>
      </Stack>
    </Group>
  );
};
