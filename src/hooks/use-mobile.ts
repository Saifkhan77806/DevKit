import { useEffect, useState } from "react";

type ScreenSize = "sm" | "md" | "lg";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return !!isMobile;
}

const getScreenSize = (): ScreenSize => {
  if (typeof window === "undefined") return "lg"; // SSR safety

  const width = window.innerWidth;

  if (width < 640) return "sm";
  if (width < 1024) return "md";
  return "lg";
};

export const useScreenSize = (): ScreenSize => {
  const [size, setSize] = useState<ScreenSize>(getScreenSize);

  useEffect(() => {
    const handleResize = () => {
      setSize(getScreenSize());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
};
