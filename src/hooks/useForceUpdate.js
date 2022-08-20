import { useState, useCallback } from 'react';

const useForceUpdate = () => {
  const [, forceUpdate] = useState([]);

  return useCallback(() => forceUpdate([]), []);
}

export default useForceUpdate;
