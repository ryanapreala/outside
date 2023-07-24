import React, { useState } from 'react';
import { styled } from '@mui/system';

const ButtonContainer = styled('div')({
  width: '300px',
  height: '60px',
  paddingLeft: '48px',
  paddingRight: '48px',
  paddingTop: '16px',
  paddingBottom: '16px',
  borderRadius: '8px',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
  display: 'inline-flex',
  cursor: 'pointer',
  background: ({ isHovered }) => (isHovered ? '#F5B955' : '#FDF2DB'),
});

const ButtonText = styled('div')({
  textAlign: 'center',
  color: '#090909',
  fontSize: '20px',
  fontFamily: 'Open Sans',
  fontWeight: '700',
  letterSpacing: '1.25',
  wordWrap: 'break-word',
});

const ButtonStyle = ({ text }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    setIsHovered(!isHovered);
  };

  return (
    <ButtonContainer
      isHovered={isHovered}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <ButtonText>{text}</ButtonText>
    </ButtonContainer>
  );
};

export default ButtonStyle;
