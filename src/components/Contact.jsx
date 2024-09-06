import React, { useContext, useEffect, useMemo, useRef } from 'react';
import './sectionStyle.css';
import MyContext from '../context/MyContext';
import Sections from './Sections';

const Contact = ({ order }) => {
  const { padding, rotator, divSize, fixedRatio1, MobileScreen, setRotator } = useContext(MyContext);
  const section = useRef(null);

  // Calculating iteration, scale, and rotation using separate useMemo hooks
  const iteration = useMemo(() => order + rotator, [order, rotator]);
  const scale = useMemo(() => Math.pow(fixedRatio1, iteration), [fixedRatio1, iteration]);
  const rotation = useMemo(() => 90 * iteration, [iteration]);

  // Calculating padding separately
  const calculatedPadding = useMemo(() => {
    if (order === 0) return `${padding}rem`;
    if (padding === 0) return '';

    const adjustedPadding = padding * Math.pow(fixedRatio1, -iteration);
    return `${Math.min(adjustedPadding, padding * order)}rem`;
  }, [order, padding, fixedRatio1, iteration]);

  useEffect(() => {
    // Apply transformation after component is mounted or updated
    if (section.current) {
      section.current.style.transform = `scale(${scale}) rotate(${rotation}deg)`;
    }
  }, [scale, rotation]);

  return (
    <div
      onClick={() => setRotator(order * -1)}
      ref={section}
      style={{ padding: calculatedPadding }}
      className={`page1 ${rotation < -90 ? 'hidden' : ''} ${MobileScreen ? 'custom-transform-origin2' : 'custom-transform-origin1'}`}
    >
      <Sections />
      <div className='h-full w-full rounded-2xl glassmorphism glassmorphism-gradient'>
        <div className={`${divSize ? 'h-screen' : 'h-full'} ${iteration === order ? 'visible' : 'hidden'} w-full`}>
          {/* Content here */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
