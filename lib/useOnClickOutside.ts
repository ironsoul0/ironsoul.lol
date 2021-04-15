import { RefObject, useEffect } from "react";

export const useOnClickOutside = (
  ref: RefObject<HTMLElement> | null,
  handler: () => void
) => {
  useEffect(() => {
    const listener = (event: Event) => {
      if (!event.target || !ref) {
        return;
      }
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler();
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};
