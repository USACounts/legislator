import { useState } from 'react';
import { isBrowser } from '@constants';

const useLocalStorage = (key: string, initialValue?: string) => {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Don't use local storage if server side.
      if (isBrowser) {
        // Get from local storage by key
        const item = window.localStorage.getItem(key);

        // Parse stored json or if none return initialValue
        return item ? JSON.parse(item) : initialValue;
      }
    } catch (error: unknown) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value: string | ((storedValue: string) => string)) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);

      // Don't use local storage if server side.
      if (isBrowser) {
        // Save to local storage
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error: unknown) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
