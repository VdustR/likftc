import type { ComponentProps } from "react";
import type { Flipped, Flipper } from "react-flip-toolkit";
import { spring } from "react-flip-toolkit";

type FlippedProps = ComponentProps<typeof Flipped>;
type FlipperProps = ComponentProps<typeof Flipper>;

const flipMap = new WeakMap<HTMLElement, true>();
const removeElementMap = new WeakMap<HTMLElement, () => void>();

function removeElement(el: HTMLElement) {
  const removeElement = removeElementMap.get(el);
  if (!removeElement) return;
  removeElementMap.delete(el);
  spring({
    onUpdate: (val) => {
      el.style.opacity = `${1 - Number(val)}`;
    },
    onComplete: removeElement,
  });
}

export const onAppear: FlippedProps["onAppear"] = (el) => {
  spring({
    onUpdate: (val) => {
      el.style.opacity = `${val}`;
    },
  });
};

export const onStart: FlippedProps["onStart"] = (el) => {
  flipMap.set(el, true);
};

export const onComplete: FlippedProps["onComplete"] = (el) => {
  flipMap.delete(el);
  removeElement(el);
};

export const onExit: FlippedProps["onExit"] = (el, _index, _removeElement) => {
  removeElementMap.set(el, _removeElement);
  if (!flipMap.get(el)) {
    removeElement(el);
  }
};

export const handleEnterUpdateDelete: FlipperProps["handleEnterUpdateDelete"] =
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
