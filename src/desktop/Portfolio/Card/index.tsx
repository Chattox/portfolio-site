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
  useMantineTheme,
} from "@mantine/core";
import { motion } from "framer-motion";
import {
  IconBrandGithub,
  IconBrandYoutube,
  IconPlayerPlay,
  IconDeviceWatch,
} from "@tabler/icons-react";

import { AnimatedButtonWrapper } from "../../../components/AnimatedButtonWrapper";
import { useStyles } from "./index.styles";
import { getColor } from "../../../utils/getColor";
import { PortfolioProps } from "../../../content/portfolio/portfolioData";

const Icons: Record<string, JSX.Element> = {
  github: <IconBrandGithub size={48} />,
  youtube: <IconBrandYoutube size={48} />,
  play: <IconPlayerPlay size={48} />,
  fitbit: <IconDeviceWatch size={48} />,
};

export const PortfolioCard = ({
  imgSrc,
  tags,
  title,
  description,
  links,
  imageContain,
  bgColor,
}: PortfolioProps) => {
  const { classes, cx } = useStyles();
  const theme = useMantineTheme();

  return (
    <motion.div whileHover={{ y: -10 }}>
      <Card shadow="sm" padding="md" radius="md" maw={"16rem"} withBorder>
        <Card.Section>
          <BackgroundImage
            src={theme.colorScheme === "light" ? imgSrc.light : imgSrc.dark}
            className={
              imageContain
                ? cx(classes.cardImage, classes.cardImageContain)
                : classes.cardImage
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
        <Text size="sm" color="dimmed" sx={{ height: "5rem" }}>
          {description}
        </Text>
        <Center>
          {links?.map((link) => (
            <AnimatedButtonWrapper>
              <Tooltip
                disabled={Boolean(!link.tooltip)}
                label={link.tooltip}
                withArrow
              >
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
