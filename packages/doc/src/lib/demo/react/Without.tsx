import type { ReactNode } from "react";
import React from "react";
import { Flipped, Flipper } from "react-flip-toolkit";
import { onAppear, onExit } from "./transition";
import useFrame from "./useFrame";

export default function With(): ReactNode {
  const frame = useFrame();

  return (
    <Flipper flipKey={frame.join(",")}>
      <ul>
        {frame.map((item) => (
          <Flipped key={item} flipId={item} onAppear={onAppear} onExit={onExit}>
            <li>{item}</li>
          </Flipped>
        ))}
      </ul>
    </Flipper>
  );
}
