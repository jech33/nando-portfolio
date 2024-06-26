"use client";
import Lottie from "react-lottie";
import animationData from "./flow1.json";

const NandoLoader = () => {
  const defaultOptions = {
    animationData,
    loop: true,
    autoplay: true,
  };

  return (
    <Lottie
      options={defaultOptions}
      height={200}
      width={200}
      isClickToPauseDisabled
    />
  );
};

export default NandoLoader;
