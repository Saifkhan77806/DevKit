import { useEffect, useState } from "react";

export function useScrolled() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Only update if value actually changes
      const isScrolled = window.scrollY > 0;
      setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    // Run once on mount
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return scrolled;
}
