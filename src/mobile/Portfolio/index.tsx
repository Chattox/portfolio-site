import { Accordion, ActionIcon, Group, Stack, Text, Tooltip } from '@mantine/core';

import { portfolioData } from '../../content/portfolio/portfolioData';
import { Label } from './Label';
import {
  IconBrandGithub,
  IconBrandYoutube,
  IconDeviceWatch,
  IconPlayerPlay,
} from '@tabler/icons-react';
import { AnimatedButtonWrapper } from '../../components/AnimatedButtonWrapper';
import { getColor } from '../../utils/getColor';

const Icons: Record<string, JSX.Element> = {
  github: <IconBrandGithub size={48} />,
  youtube: <IconBrandYoutube size={48} />,
  play: <IconPlayerPlay size={48} />,
  fitbit: <IconDeviceWatch size={48} />,
};

export const Portfolio = () => {
  return (
    <Accordion multiple>
      {portfolioData.map((item) => {
        return (
          <Accordion.Item value={item.title.toLowerCase()}>
            <Accordion.Control>
              <Label imgSrc={item.imgSrc} title={item.title} tagline={item.tagline} />
            </Accordion.Control>
            <Accordion.Panel>
              <Stack align="center">
                <Text>{item.description}</Text>
                <Group>
                  {item.links?.map((link) => (
                    <AnimatedButtonWrapper>
                      <Tooltip disabled={Boolean(!link.tooltip)} label={link.tooltip} withArrow>
                        <a href={link.url} target="_blank" rel="noopener noreferrer nofollow">
                          <ActionIcon size="lg" variant="subtle" color={getColor()}>
                            {Icons[link.icon]}
                          </ActionIcon>
                        </a>
                      </Tooltip>
                    </AnimatedButtonWrapper>
                  ))}
                </Group>
              </Stack>
            </Accordion.Panel>
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
};
