import { useRef, useEffect, useState } from "react";

function randomColor(currentColor) {
  const color_list = ["red", "black", "yellow", "pink"];
  const currentIndex = color_list.indexOf(currentColor);
  let newIndex = currentIndex;
  while (currentIndex === newIndex) {
    newIndex = Math.trunc(Math.random() * 4);
  }
  console.log(color_list[newIndex]);
  return color_list[newIndex];
}

function useMagicColor() {
  const colorRef = useRef("transparent");
  const [color, setColor] = useState("transparent");
  useEffect(() => {
    const colorInterval = setInterval(() => {
      const newColor = randomColor();
      setColor(newColor);

      colorRef.current = newColor;
    }, 1000);
    return () => {
      clearInterval(colorInterval);
    };
  }, []);
  return color;
}

export default useMagicColor;
