import Likftc from "@vdustr/likftc";
import React, { ReactNode, useEffect, useMemo, useRef } from "react";
import { Flipped, Flipper } from "react-flip-toolkit";
import {
  handleEnterUpdateDelete,
  onAppear,
  onComplete,
  onExit,
  onStart,
} from "./transition";
import useFrame from "./useFrame";

React;

export default function With(): ReactNode {
  const frame = useFrame();

  const {
    current: { get, sync },
  } = useRef(Likftc(frame));
  useEffect(() => {
    sync(frame);
  }, [frame]);
  const flipKey = useMemo(
    () =>
      JSON.stringify(
        frame.map((key) => ({
          key,
          mapKey: get(key),
        }))
      ),
    [frame, get]
  );

  return (
    <Flipper
      flipKey={flipKey}
      handleEnterUpdateDelete={handleEnterUpdateDelete}
    >
      <ul>
        {frame.map((item) => {
          const mapKey = get(item);
          return (
            <Flipped
              key={mapKey}
              flipId={mapKey}
              onAppear={onAppear}
              onExit={onExit}
              onStart={onStart}
              onComplete={onComplete}
            >
              <li>{item}</li>
            </Flipped>
          );
        })}
      </ul>
    </Flipper>
  );
}
