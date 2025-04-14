import { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

export default function Counter({ value, direction = 'up', className }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(direction === 'down' ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 100,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      motionValue.set(direction === 'down' ? 0 : value);
    }
  }, [motionValue, isInView]);

  useEffect(
    () =>
      springValue.on('change', (latest) => {
        if (ref.current) {
          ref.current.textContent = new Intl.NumberFormat('en-GB', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          }).format(latest);
        }
      }),
    [springValue]
  );

  return <span className={className} ref={ref} />;
}
