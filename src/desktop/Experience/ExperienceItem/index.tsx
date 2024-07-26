import { Grid, Image, Stack, Text, Title } from "@mantine/core";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import { AnimatedButtonWrapper } from "../../../components/AnimatedButtonWrapper";

import { useStyles } from "./index.styles";

export interface ExperienceItemProps {
  side?: "left" | "right";
  firstOrLast?: "first" | "last";
  imgSrc?: string;
  title: string;
  content: string;
  dates: string;
  id: string;
  prevId?: string;
  nextId?: string;
}

export const ExperienceItem = ({
  side,
  firstOrLast,
  imgSrc,
  title,
  content,
  dates,
  id,
  prevId = "",
  nextId = "",
}: ExperienceItemProps) => {
  const { classes } = useStyles({ side: side, firstOrLast: firstOrLast });

  return (
    <Grid className={classes.expContainer} align="center" grow={false}>
      <Grid.Col order={side === "left" ? 0 : 1} span="content">
        <Grid className={classes.expItem} grow={false}>
          <Grid.Col order={side === "left" ? 2 : 1} span="content">
            <Image
              width={150}
              height={150}
              radius="lg"
              src={imgSrc}
              withPlaceholder
            />
          </Grid.Col>
          <Grid.Col order={side === "left" ? 1 : 2} span="auto">
            <Stack className={classes.textContent}>
              <Stack spacing="0.25rem">
                <Title>{title}</Title>
                <Text className={classes.dateText}>{dates}</Text>
              </Stack>
              <Text id={id}>{content}</Text>
            </Stack>
          </Grid.Col>
        </Grid>
      </Grid.Col>
      <Grid.Col order={side === "left" ? 1 : 0} span="content">
        <Stack>
          {firstOrLast === "first" ? undefined : (
            <AnimatedButtonWrapper>
              <IconChevronUp
                onClick={() => {
                  const prevElem = document.getElementById(prevId);
                  prevElem?.scrollIntoView({
                    block: "center",
                    behavior: "smooth",
                  });
                }}
                className={classes.expScrollButton}
                size={48}
              />
            </AnimatedButtonWrapper>
          )}
          {firstOrLast === "last" ? undefined : (
            <AnimatedButtonWrapper>
              <IconChevronDown
                onClick={() => {
                  const nextElem = document.getElementById(nextId);
                  nextElem?.scrollIntoView({
                    block: "center",
                    behavior: "smooth",
                  });
                }}
                className={classes.expScrollButton}
                size={48}
              />
            </AnimatedButtonWrapper>
          )}
        </Stack>
      </Grid.Col>
    </Grid>
  );
};
