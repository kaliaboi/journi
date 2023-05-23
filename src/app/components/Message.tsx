import { clsx } from "clsx";
import { FC } from "react";
import { motion } from "framer-motion";

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
      <div
        className={clsx(
          role === "user" ? "bg-slate-50" : "bg-slate-100",
          "p-4"
        )}
      >
        {message}
      </div>
    </motion.div>
  );
};

export default Message;
