import Likftc from "@vdustr/likftc";
import handleEnterUpdateDelete from "@vdustr/likftc/react-flip-toolkit/handleEnterUpdateDelete";
import type { FlippedProps } from "@vdustr/likftc/react-flip-toolkit/useFlippedProps";
import useFlippedProps from "@vdustr/likftc/react-flip-toolkit/useFlippedProps";
import React, { ReactNode, useEffect, useMemo, useRef } from "react";
import { Flipped, Flipper, spring } from "react-flip-toolkit";
import useFrame from "./useFrame";

React;

const onAppear: FlippedProps["onAppear"] = (el) => {
  spring({
    onUpdate: (val) => {
      el.style.opacity = `${val}`;
    },
  });
};

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

  const flippedProps = useFlippedProps({
    exit: useMemo<NonNullable<Parameters<typeof useFlippedProps>[0]["exit"]>>(
      () => ({
        onUpdate: (el, val) => {
          el.style.opacity = `${1 - Number(val)}`;
        },
      }),
      []
    ),
  });

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
              {...flippedProps}
            >
              <li>{item}</li>
            </Flipped>
          );
        })}
      </ul>
    </Flipper>
  );
}
