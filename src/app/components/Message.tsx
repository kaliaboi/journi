import { clsx } from "clsx";
import { FC } from "react";
import { motion } from "framer-motion";
import Paragraph from "./ui/Paragraph";

interface MessageProps {
  role: "user" | "assistant" | "system";
  message: string;
}

const Message: FC<MessageProps> = ({ role, message }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-4">
        <Paragraph size="prompt" prominence="dark">
          {message}
        </Paragraph>
      </div>
    </motion.div>
  );
};

export default Message;
