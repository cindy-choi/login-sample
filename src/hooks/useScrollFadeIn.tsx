import { useEffect, useRef, useCallback } from 'react';

type ScrollFadeInProps = {
  direction?: string,
  duration?: number,
  delay?: number,
  threshold?: number,
};

const handleDirection = (name: string) => {
	switch (name) {
		case 'up':
			return 'translate3d(0, 50%, 0)';
		case 'down':
			return 'translate3d(0, -50%, 0)';
		case 'left':
			return 'translate3d(50%, 0, 0)';
		case 'right':
			return 'translate3d(-50%, 0, 0)';
		default:
			return;
	}
};

export function useScrollFadeIn({direction = 'up', duration = 1, delay = 0, threshold = 0.7}: ScrollFadeInProps) {
  const target = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(([entry]) => {
    const current = target.current;

    if (current && entry.isIntersecting) {
      current.style.transitionProperty = 'all';
      current.style.transitionDuration = `${duration}s`;
      current.style.transitionTimingFunction = 'cubic-bezier(0, 0, 0.2, 1)';
      current.style.transitionDelay = `${delay}s`;
      current.style.opacity = '1';
      current.style.transform = 'translate3d(0, 0, 0)';
    }
  }, [delay, duration]);

  useEffect(() => {
		if (!target || !target.current) return;

    let observer = new IntersectionObserver(handleScroll, { threshold: 0.7 });
    observer.observe(target.current);

    return () => observer.disconnect();
  }, [handleScroll]);

  return {
    ref: target,
	  style: {
      opacity: 0,
      transform: handleDirection(direction),
    },
  };
}

export default useScrollFadeIn;
