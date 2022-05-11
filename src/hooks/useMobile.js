import { useState } from "react";

export const useMobile = () => {
  const [isMobile, setIsMobile] = useState(0);
  window.addEventListener("resize", function (event) {
    setIsMobile(window.innerWidth);
  });
  return isMobile;
};
