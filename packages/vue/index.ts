import Likftc from "@likftc/core";
import type { ComputedRef } from "vue";
import { watch } from "vue";

export default function useLikftc<
  Source extends number | string,
  Target extends number | string = string
>(frame: ComputedRef<Source[]>, generator?: () => Target) {
  const { get, sync } = Likftc(frame.value, generator);
  watch(frame, () => {
    sync(frame.value);
  });
  return { get };
}
