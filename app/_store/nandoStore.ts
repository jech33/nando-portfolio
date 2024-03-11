import { StaticImageData } from "next/image";
import { create } from "zustand";

export type NandoStore = {
  prevRoute: string;
};

export const useNandoStore = create<NandoStore>((set) => ({
  prevRoute: "",
}));
