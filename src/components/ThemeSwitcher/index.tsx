import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { IconSunFilled, IconMoonFilled } from "@tabler/icons-react";
import { motion } from "framer-motion";
import classes from "./ThemeSwitcher.module.css";

interface ThemeSwitcherProps {
  size: string;
}

const favicon = document.getElementById("favicon");

export const ThemeSwitcher = ({ size }: ThemeSwitcherProps) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={classes.switcher}
    >
      <ActionIcon
        size={size}
        variant="outline"
        onClick={() => {
          toggleColorScheme();
          favicon?.setAttribute(
            "href",
            colorScheme === "dark" ? "/favicon-light.ico" : "/favicon-dark.ico"
          );
        }}
        color={colorScheme === "dark" ? "yellow.4" : "blue.6"}
      >
        {colorScheme === "dark" ? (
          <IconSunFilled stroke={2.5} />
        ) : (
          <IconMoonFilled stroke={2.5} />
        )}
      </ActionIcon>
    </motion.div>
  );
};
