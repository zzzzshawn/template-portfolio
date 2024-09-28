import { useState, useEffect, useRef } from 'react';

const useIntersection = (options) => {
  const [ratio, setRatio] = useState(0);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setRatio(entry.intersectionRatio);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return [ref, ratio];
};

export default useIntersection;
