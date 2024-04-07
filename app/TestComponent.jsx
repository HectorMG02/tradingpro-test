import React, { useEffect } from "react";
import useStore from "./store";

function TestComponent({ onReady }) {
  const { savedBooks, setSelectedGenre, selectedGenre } = useStore();
  useEffect(() => {
    if (onReady) {
      onReady({ savedBooks, setSelectedGenre, selectedGenre });
    }
  }, [savedBooks, setSelectedGenre, selectedGenre, onReady]);

  return null;
}

export default TestComponent;
