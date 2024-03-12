import { StaticImageData } from "next/image";
import { create } from "zustand";

export type NandoStore = {
  prevRoute: string;
  exitAnimation: "exitRight" | "exitStatic";
  setExitAnimationRight: () => void;
  setExitAnimationStatic: () => void;
};

export const useNandoStore = create<NandoStore>((set) => ({
  prevRoute: "",
  exitAnimation: "exitStatic",
  setExitAnimationRight: () => set({ exitAnimation: "exitRight" }),
  setExitAnimationStatic: () => set({ exitAnimation: "exitStatic" }),
}));
