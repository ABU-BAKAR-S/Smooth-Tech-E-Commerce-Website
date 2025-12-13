// hooks/useScrollRestoration.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const scrollPositions = {};

export const useScrollRestoration = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const savedY = scrollPositions[pathname];
    if (savedY !== undefined) {
      window.scrollTo(0, savedY);
    }

    return () => {
      scrollPositions[pathname] = window.scrollY;
    };
  }, [pathname]);
};
