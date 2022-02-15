import Likftc from "@likftc/core";
import type { ComputedRef } from "vue";
import { watch } from "vue";

export default function useLikftc(frame: ComputedRef<(number | string)[]>) {
  const { get, sync } = Likftc(frame.value);
  watch(frame, () => {
    sync(frame.value);
  });
  return { get };
}
