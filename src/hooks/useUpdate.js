import { useEffect, useRef } from 'react';

const useUpdate = (callback, deps) => {
  const mountedRef = useRef(false);
  useEffect(() => {
    mountedRef.current && callback();
  }, deps);

  useEffect(() => {
    mountedRef.current = true;
  }, []);
}

export default useUpdate;
