import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = function (newMode, replace = false) {
    if (replace === true) {
      setMode(newMode);
      const replacedHistory = history.slice(0, -1);
      setHistory([...replacedHistory, newMode]);
    } else {
      setMode(newMode);
      setHistory([...history, newMode]);
    }
  };

  const back = function () {
    if (history.length > 1) {
      const newHistory = history.slice(0, -1);
      setMode(newHistory[newHistory.length - 1]);
      setHistory(newHistory);
    }
  };

  return { mode, transition, back };
};


