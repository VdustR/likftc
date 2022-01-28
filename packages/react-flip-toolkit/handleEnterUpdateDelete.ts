import type { ComponentProps } from "react";
import type { Flipper } from "react-flip-toolkit";

type FlipperProps = ComponentProps<typeof Flipper>;

const handleEnterUpdateDelete: FlipperProps["handleEnterUpdateDelete"] =
  async ({
    hideEnteringElements,
    animateEnteringElements,
    animateExitingElements,
    animateFlippedElements,
  }) => {
    hideEnteringElements();
    animateFlippedElements();
    animateExitingElements();
    animateEnteringElements();
  };

export default handleEnterUpdateDelete;
