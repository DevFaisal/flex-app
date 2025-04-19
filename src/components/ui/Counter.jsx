
import {  motion,useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';

function Counter({
  number = 0,
  duration = 2,
  prefix = '',
  suffix = '',
  className = '',
  fontSize = '',
  textColor = '',
  weight = '',
}) {
  // Create a motion value for the count
  const count = useMotionValue(0);
  
  // Transform the motion value to a formatted string
  const roundedCount = useTransform(count, value => {
    return Math.round(value).toLocaleString('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  });

  useEffect(() => {
    // Animate the count to the target number
    const animation = animate(count, number, {
      duration: duration,
      ease: "easeOut",
      onComplete: () => {
        // Make sure we land exactly on the target number
        count.set(number);
      }
    });

    // Clean up the animation on unmount or when deps change
    return animation.stop;
  }, [count, number, duration]);

  // Combine Tailwind classes
  const combinedClassName = `inline text-${fontSize} font-${weight} text-${textColor} ${className}`;

  return (
    <div className={combinedClassName}>
      {prefix}
      <motion.span>{roundedCount}</motion.span>
      {suffix}
    </div>
  );
}


export default Counter;