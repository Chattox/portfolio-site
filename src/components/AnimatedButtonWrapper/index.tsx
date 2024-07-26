import { motion } from "framer-motion";
import classes from "./AnimatedButtonWrapper.module.css";

export const AnimatedButtonWrapper = ({ ...props }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={classes.animatedButton}
    >
      {props.children}
    </motion.div>
  );
};
