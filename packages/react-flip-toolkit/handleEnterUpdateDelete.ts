import type { FlipperProps } from "flip-toolkit/lib/types";

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
