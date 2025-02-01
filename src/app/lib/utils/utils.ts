// * combine tailwind-merge and clsx

import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export default function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export function capitalize(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
