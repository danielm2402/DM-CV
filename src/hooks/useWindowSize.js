import { useState, useEffect } from "react";

export default function useWindowSize() {

  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
    numberParticles: undefined
  });

  useEffect(() => {

    function handleResize() {
      var numberP = 20
      if (window.innerWidth > 400)
        numberP = 30
      if (window.innerWidth > 600)
        numberP = 40
      if (window.innerWidth > 800)
        numberP = 50




      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        numberParticles: numberP
      });

    }

    // Add event listener
    window.addEventListener("resize", handleResize);


    handleResize();


    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
