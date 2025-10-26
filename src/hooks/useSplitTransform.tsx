import { MotionValue, useTransform } from "framer-motion";

export function useSplitTransform(
  progress: MotionValue<number>,
  index: number,
  total: number,
  outputRange: unknown[]
) {
  const step = 1 / (total - 1);

  const start = index === 0 ? 0 : (index - 1) * step;
  const end = index === 0 ? 0 : index * step;

  return useTransform(progress, [start, end], outputRange);
}
