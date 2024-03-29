"use client";

import { FC } from "react";
import Lottie from "lottie-react";
import animation from "../../../public/transistor-man-sitting-and-looking-at-smartphone.json";

const MainAnimation: FC = ({}) => {
  return <Lottie className="h-56" animationData={animation} loop={true} />;
};

export default MainAnimation;
