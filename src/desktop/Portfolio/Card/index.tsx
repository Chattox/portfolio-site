import {
  ActionIcon,
  BackgroundImage,
  Badge,
  Card,
  Center,
  Flex,
  Stack,
  Text,
  Title,
  Tooltip,
} from '@mantine/core';
import { motion } from 'framer-motion';
import {
  IconBrandGithub,
  IconBrandYoutube,
  IconDeviceWatch,
  IconPlayerPlay,
} from '@tabler/icons-react';

import { AnimatedButtonWrapper } from '../../../components/AnimatedButtonWrapper';
import { useStyles } from './index.styles';
import { getColor } from '../../../utils/getColor';

export interface LinkProps {
  url: string;
  icon: string;
  tooltip?: string;
}

export interface PortfolioCardProps {
  cardImgSrc: string;
  tags?: Array<string>;
  title: string;
  description: string;
  links?: Array<LinkProps>;
  imageContain?: boolean;
  bgColor?: string;
}

const Icons: Record<string, JSX.Element> = {
  github: <IconBrandGithub size={48} />,
  youtube: <IconBrandYoutube size={48} />,
  play: <IconPlayerPlay size={48} />,
  fitbit: <IconDeviceWatch size={48} />,
};

export const PortfolioCard = ({
  cardImgSrc,
  tags,
  title,
  description,
  links,
  imageContain,
  bgColor,
}: PortfolioCardProps) => {
  const { classes, cx } = useStyles();

  return (
    <motion.div whileHover={{ y: -10 }}>
      <Card shadow="sm" padding="md" radius="md" maw={'16rem'} withBorder>
        <Card.Section>
          <BackgroundImage
            src={cardImgSrc}
            className={
              imageContain ? cx(classes.cardImage, classes.cardImageContain) : classes.cardImage
            }
            component={Flex}
            sx={{ backgroundColor: bgColor }}
          >
            <Stack align="flex-end" justify="flex-end" spacing={3}>
              {tags?.map((tag) => (
                <Badge>{tag}</Badge>
              ))}
            </Stack>
          </BackgroundImage>
        </Card.Section>
        <Title order={2}>{title}</Title>
        <Text size="sm" color="dimmed">
          {description}
        </Text>
        <Center>
          {links?.map((link) => (
            <AnimatedButtonWrapper>
              <Tooltip disabled={Boolean(!link.tooltip)} label={link.tooltip} withArrow>
                <a href={link.url} target="_blank" rel="noopener">
                  <ActionIcon size="xl" variant="subtle" color={getColor()}>
                    {Icons[link.icon]}
                  </ActionIcon>
                </a>
              </Tooltip>
            </AnimatedButtonWrapper>
          ))}
        </Center>
      </Card>
    </motion.div>
  );
};
