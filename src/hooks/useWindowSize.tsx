import { useState, useEffect } from 'react';

const getSize = () => {
  const height = window.innerHeight 
  || document.documentElement.clientHeight 
  || document.body.clientHeight;

  const width = window.innerWidth 
  || document.documentElement.clientWidth 
  || document.body.clientWidth;

  return { width, height, };
};

export function useWindowSize() {
  let [size, setSize] = useState(getSize());

  useEffect(() => {
		// debounce 
    let timer: ReturnType<typeof setTimeout>;
    const resizeListener = () => {
      clearTimeout(timer);
      timer = setTimeout(() => setSize(getSize()), 150);
    };
    window.addEventListener('resize', resizeListener);

    return () => {
      window.removeEventListener('resize', resizeListener);
    }
  }, [])

  return size;
}

export default useWindowSize;
