import { FC, HTMLAttributes, ReactNode } from "react";

interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children?: ReactNode;
}

const Title: FC<TitleProps> = ({}) => {
  return <h1>Title</h1>;
};

export default Title;
