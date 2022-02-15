import Likftc from "@likftc/core";
import { useEffect, useRef } from "react";

export default function useLikftc(frame: (number | string)[]) {
  const {
    current: { get, sync },
  } = useRef(Likftc(frame));
  useEffect(() => {
    sync(frame);
  }, [frame, sync]);
  return { get };
}
