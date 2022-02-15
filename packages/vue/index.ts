import Likftc from "@likftc/core";
import type { WatchSource } from "vue";
import { watch } from "vue";

export default function useLikftc<
  Source extends number | string,
  Target extends number | string = string
>(frame: WatchSource<Source[]>, generator?: () => Target) {
  const { get, sync } = Likftc(
    typeof frame === "function" ? frame() : frame.value,
    generator
  );
  watch(frame, (frame) => {
    sync(frame);
  });
  return { get };
}
