import type { ReactNode } from "react";
import React from "react";
import { Flipped, Flipper } from "react-flip-toolkit";
import { handleEnterUpdateDelete } from "./transition";
import useFrame from "./useFrame";

React;

export default function With(): ReactNode {
  const frame = useFrame();

  return (
    <Flipper
      flipKey={frame.join(",")}
      handleEnterUpdateDelete={handleEnterUpdateDelete}
    >
      <ul>
        {frame.map((item) => (
          <Flipped key={item} flipId={item}>
            <li>{item}</li>
          </Flipped>
        ))}
      </ul>
    </Flipper>
  );
}
