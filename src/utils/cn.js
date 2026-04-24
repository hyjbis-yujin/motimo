import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * clsx와 tailwind-merge를 결합하여 동적 클래스명 충돌을 방지하는 유틸리티
 * @param  {...any} inputs
 * @returns {string}
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
