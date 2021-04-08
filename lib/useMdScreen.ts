import { useEffect, useState } from "react";

import { useWindowSize } from "./useWindowSize";

export const useMdScreen = (): boolean => {
  const { width } = useWindowSize();
  const [mdScreen, setMdScreen] = useState(true);

  useEffect(() => {
    if (!width) return;
    setMdScreen(width >= 768);
  }, [width, setMdScreen]);

  return mdScreen;
};
