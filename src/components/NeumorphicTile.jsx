import React from 'react';
import { RiArrowDownLine } from '@remixicon/react';

const NeumorphicTile = ({visible , isLightTheme, size, padding, rotation}) => {
  const backgroundColor = isLightTheme ? '#f3f4f6' : '#1f1f1f'; // Darker shade for dark mode
  const shadowColorDark = isLightTheme ? 'rgba(0, 0, 0, 0.1)' : 'rgba(0, 0, 0, 0.1)'; // More pronounced shadow in dark mode
  const shadowColorLight = isLightTheme ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.3)'; // Softer light shadow in dark mode

  return (
    <div className={`${visible? 'visible':'hidden'} h-full w-full flex justify-center items-center ${isLightTheme ? 'bg-gray-100' : 'bg-gray-900'}`}>
      <div style={{
        transform: `rotate(${rotation}deg)`,
        padding: `${padding}rem`, // Adjusted for better fit
        borderRadius: '50%',
        background: `linear-gradient(145deg, ${backgroundColor}, ${backgroundColor})`,
        boxShadow: `10px 10px 20px ${shadowColorDark}, -10px -10px 20px ${shadowColorLight}`
      }}>
        <RiArrowDownLine color={isLightTheme ? 'gray' : '#c0c0c0'} size={size} />
      </div>
    </div>
  );
};

export default NeumorphicTile;
