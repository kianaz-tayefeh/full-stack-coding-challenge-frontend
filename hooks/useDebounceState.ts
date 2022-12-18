import React from "react";

function debounce(cb, time) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(cb, time, ...args);
  };
}

// this only needs to exist because concurrent mode isn't here yet. When we get
// that then so much of our hack-perf fixes go away!
function useDebouncedState(initialState) {
  const [state, setState] = React.useState(initialState);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSetState = React.useCallback(debounce(setState, 200), []);
  return [state, debouncedSetState];
}

export { useDebouncedState };
