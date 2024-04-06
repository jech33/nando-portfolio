import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "@/tailwind.config";

const useTwConfig = () => {
  const fullConfig = resolveConfig(tailwindConfig);
  return fullConfig;
};

export default useTwConfig;
