import React from "react";
import { useNandoStore } from "../_store/nandoStore";

const useNandoAnimations = () => {
  const { setExitAnimationRight, setExitAnimationStatic } = useNandoStore(
    ({ setExitAnimationRight, setExitAnimationStatic }) => ({
      setExitAnimationRight,
      setExitAnimationStatic,
    })
  );

  return {
    setExitAnimationRight,
    setExitAnimationStatic,
  };
};

export default useNandoAnimations;
