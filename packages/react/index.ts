import Likftc from "@likftc/core";
import { useEffect, useRef } from "react";

export default function useLikftc<
  Source extends number | string,
  Target extends number | string = string
>(frame: Source[], generator?: () => Target) {
  const {
    current: { get, sync },
  } = useRef(Likftc(frame, generator));
  useEffect(() => {
    sync(frame);
  }, [frame, sync]);
  return { get };
}
