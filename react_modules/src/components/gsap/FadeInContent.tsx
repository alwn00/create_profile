import gsap from 'gsap';
import React, {useEffect, useRef } from 'react';

interface TextProps {
  children?: React.ReactNode;
  delay: number;
}

const FadeInContent = ({ children, delay }: TextProps) => {
  const target = useRef(null);
  useEffect(() => {
    gsap.from(target.current, {
      scrollTrigger: {
        trigger: target.current,
        toggleActions: 'play none none none',
      },
      opacity: 0,
      delay,
      duration: 1.5,
      ease: 'power3.out',
    });
  }, [delay]);
  return <div ref={target}>{children}</div>;
};

export default FadeInContent;