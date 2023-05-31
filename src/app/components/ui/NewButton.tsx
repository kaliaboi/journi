import { FC, HTMLAttributes, ReactNode } from "react";

interface NewButtonProps extends HTMLAttributes<HTMLButtonElement> {
  href: string;
  children: ReactNode;
}

const NewButton: FC<NewButtonProps> = ({ href, children }) => {
  return <a href={href}>{children}</a>;
};

export default NewButton;
