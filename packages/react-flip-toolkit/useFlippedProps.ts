import type { SimpleSpringOptions } from "flip-toolkit/lib/Spring/types";
import type { FlippedProps } from "flip-toolkit/lib/types";
import { useCallback, useMemo } from "react";
import { spring } from "react-flip-toolkit";

export type SpringOptions = Omit<SimpleSpringOptions, "onUpdate"> & {
  onUpdate: (
    el: HTMLElement,
    ...args: Parameters<SimpleSpringOptions["onUpdate"]>
  ) => void;
};

const flipMap = new WeakMap<HTMLElement, true>();
const removeElementMap = new WeakMap<HTMLElement, () => void>();

export default function useFlippedProps({
  exit,
}: {
  exit?: SpringOptions;
} = {}) {
  const removeElement = useCallback(
    (el: HTMLElement) => {
      const removeElement = removeElementMap.get(el);
      if (!removeElement) return;
      removeElementMap.delete(el);
      spring({
        ...exit,
        onUpdate: (val) => {
          exit?.onUpdate(el, val);
        },
        onComplete: () => {
          removeElement();
          exit?.onComplete?.();
        },
      });
    },
    [exit]
  );

  const onStart = useCallback<NonNullable<FlippedProps["onStart"]>>((el) => {
    flipMap.set(el, true);
  }, []);

  const onComplete = useCallback<NonNullable<FlippedProps["onComplete"]>>(
    (el) => {
      flipMap.delete(el);
      removeElement(el);
    },
    [removeElement]
  );

  const onExit = useCallback<NonNullable<FlippedProps["onExit"]>>(
    (el, _index, _removeElement) => {
      removeElementMap.set(el, _removeElement);
      if (!flipMap.get(el)) {
        removeElement(el);
      }
    },
    [removeElement]
  );

  return useMemo(
    () => ({
      onStart,
      onComplete,
      onExit,
    }),
    [onStart, onComplete, onExit]
  );
}
