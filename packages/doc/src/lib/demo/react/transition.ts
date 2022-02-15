import "animate.css/source/fading_entrances/fadeIn.css";
import "animate.css/source/fading_exits/fadeOut.css";
import "animate.css/source/_base.css";
import "animate.css/source/_vars.css";
import type { FlippedProps } from "flip-toolkit/lib/types";

export const appearing = new WeakMap<HTMLElement, true>();

export const onAppear: FlippedProps["onAppear"] = (el) => {
  el.classList.add("animated", "fadeIn");
  appearing.set(el, true);

  el.addEventListener("animationend", () => {
    appearing.delete(el);
    el.classList.remove("animated", "fadeIn", "slow");
  });
};

export const onExit: FlippedProps["onExit"] = (el, _index, removeElement) => {
  const isAppearing = appearing.get(el) || false;
  if (isAppearing) {
    el.classList.remove("fadeOut");
    appearing.delete(el);
  }
  el.classList.add("animated", "fadeOut", "slow");
  const clear = () => {
    removeElement();
    el.removeEventListener("animationend", clear);
  };
  el.addEventListener("animationend", clear);
};
