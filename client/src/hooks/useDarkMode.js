import useLocalStorage from "./useLocalStorage";
import { useEffect } from "react"

export function useDarkMode() {

  const [storedValue, setStoredValue] = useLocalStorage("true");

  useEffect(() => {
    if (storedValue) {
      return document.body.classList.add('dark-mode');
    }
    return document.body.classList.remove('dark-mode');

  }, [storedValue]);

  return [storedValue, setStoredValue]
}

