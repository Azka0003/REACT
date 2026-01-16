// after learning useFetch lets learn useWindowSize
// useEffect or use layoutEffect
// both are same but slight difference
// useEffect will run once all the Doms will renderd in ur browser or after the paint process
// use layuteffct will run before all the dom elements will be rendered in ur browser or before paint


import { useLayoutEffect, useState } from "react";

function useWindowResize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  function handleResize() {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  useLayoutEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
}

export default useWindowResize;