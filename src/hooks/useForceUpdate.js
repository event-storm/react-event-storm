import { useState, useCallback } from 'react';

const useForceUpdate = () => {
  const [_, forceUpdate] = useState([]);

  return useCallback(() => forceUpdate([]), []);
}

export default useForceUpdate;
