import { clsx, ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const workLabels = {
  work1: ["🎓 Course Final Project", "📱 Web & Mobile", "🎙️ User Interviews"],
  work2: [
    "🥇 Design Award Winner",
    "🖌️ Designed From Scratch",
    "👨🏻‍💻 Solutions based on user data",
  ],
  work3: [
    "⭐ New Feature",
    "🎨 Design System",
    "🙌 Sped Up Internal Processes",
  ],
  work4: [
    "📱 Multi Platform Redesign",
    "🎨 Design System",
    "🙌 Sped Up Internal Processes",
  ],
  work5: [
    "🛠️ Maintenance & Improvement",
    "🧬 File Restructuring",
    "✨ Improved Communication",
  ],
};
