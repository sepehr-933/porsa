import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// using tailwind merge is there key point in order to override the previous TW class

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
