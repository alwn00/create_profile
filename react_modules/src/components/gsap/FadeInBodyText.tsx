import gsap from 'gsap';
import React, {useEffect, useRef } from 'react';
import styled from 'styled-components';

import { REGULAR_TEXT } from '../../constants';

interface TextProps {
  children: React.ReactNode;
  delay: number;
}

const BodyTextContainer = styled.p`
  position: relative;
  font-family: ${REGULAR_TEXT};
  color: white;
  z-index: 5;
`;

const FadeInBodyText = ({ children, delay }: TextProps) => {
  const target = useRef(null);
  useEffect(() => {
    gsap.from(target.current, {
      scrollTrigger: {
        trigger: target.current,
        toggleActions: 'play none none none',
      },
      top: '-15%',
      opacity: 0,
      delay,
      duration: 1.5,
      ease: 'power3.out',
    });
  }, [delay]);
  return (({children}:TextProps) =>
  (<BodyTextContainer ref={target}>{children}</BodyTextContainer>));
};

export default FadeInBodyText;