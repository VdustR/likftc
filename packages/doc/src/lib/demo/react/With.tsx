import useLikftc from "@likftc/react";
import React, { ReactNode } from "react";
import { Flipped, Flipper } from "react-flip-toolkit";
import { v4 } from "uuid";
import { onAppear, onExit } from "./transition";
import useFrame from "./useFrame";

export default function With(): ReactNode {
  const frame = useFrame();
  const { get } = useLikftc(frame, v4);
  return (
    <Flipper flipKey={frame.join(",")}>
      <ul>
        {frame.map((item) => {
          const mapKey = get(item);
          return (
            <Flipped
              key={mapKey}
              flipId={mapKey}
              onAppear={onAppear}
              onExit={onExit}
            >
              <li>{item}</li>
            </Flipped>
          );
        })}
      </ul>
    </Flipper>
  );
}
