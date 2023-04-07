import { useEffect, useState } from "react";

export default function useDebounce(initial = "", delay = 1000) {
  const [debounceValue, setDebounce] = useState(initial);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounce(initial);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [initial, delay]);

  return debounceValue;
}
