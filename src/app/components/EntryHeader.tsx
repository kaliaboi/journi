import { FC, HTMLAttributes } from "react";
import Paragraph from "./ui/Paragraph";
import {
  FaceIcon,
  ImageIcon,
  SunIcon,
  Cross1Icon,
} from "@radix-ui/react-icons";

interface EntryHeaderProps {
  title?: string;
  subtitle?: string;
  closeAction?: () => void;
}

const EntryHeader: FC<EntryHeaderProps> = ({
  title,
  subtitle,
  closeAction,
}) => {
  return (
    <nav className="h-14 border-b border-slate-300 px-[20px] flex items-center justify-between sticky">
      <div className="left flex gap-2">
        <Paragraph prominence="dark" size="tiny">
          {title}
        </Paragraph>
        <Paragraph prominence="muted" size="tiny">
          {" "}
          / {subtitle}
        </Paragraph>
      </div>
      <div className="rig">
        <Cross1Icon />
      </div>
    </nav>
  );
};

export default EntryHeader;
