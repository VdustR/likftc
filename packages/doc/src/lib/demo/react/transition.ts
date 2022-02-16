import type { FlippedProps } from "flip-toolkit/lib/types";

export const appearing = new WeakMap<HTMLElement, true>();

export const onAppear: FlippedProps["onAppear"] = (el) => {
  el.classList.add("animate__animated", "animate__fadeIn", "animate__slow");
  appearing.set(el, true);

  el.addEventListener("animationend", () => {
    appearing.delete(el);
    el.classList.remove(
      "animate__animated",
      "animate__fadeIn",
      "animate__slow"
    );
  });
};

export const onExit: FlippedProps["onExit"] = (el, _index, removeElement) => {
  const isAppearing = appearing.get(el) || false;
  if (isAppearing) {
    el.classList.remove("animate__fadeOut");
    appearing.delete(el);
  }
  el.classList.add("animate__animated", "animate__fadeOut", "animate__slow");
  const clear = () => {
    removeElement();
    el.removeEventListener("animationend", clear);
  };
  el.addEventListener("animationend", clear);
};
