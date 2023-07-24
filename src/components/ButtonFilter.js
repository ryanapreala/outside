import React, { useState } from 'react';
import { styled } from '@mui/system';
import FilterIcon from '../Icons/FilterIcon';

const ButtonContainer = styled('div')({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '16px 48px',
  background: ({ isHovered }) => (isHovered ? '#F5B955' : '#FDF2DB'),
  borderRadius: 8,
  cursor: 'pointer',
});

const IconContainer = styled('div')({
  width: 48,
  height: 48,
  marginRight: 16,
});

const IconImage = styled('img')({
  width: '100%',
  height: '100%',
});

const ButtonText = styled('div')({
  color: '#D06224',
  fontSize: 20,
  fontFamily: 'Open Sans',
  fontWeight: '700',
  letterSpacing: '1.25',
  wordWrap: 'break-word',
});

const ButtonFilter = () => {
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
      <IconContainer>
        <IconImage src={FilterIcon} alt="Filter Icon" />
      </IconContainer>
      <ButtonText>FILTER</ButtonText>
    </ButtonContainer>
  );
};

export default ButtonFilter;
