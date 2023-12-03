import React from 'react';
import { styled } from '@mui/system';

const HeroContainer = styled('div')({
  width: '100%',
  height: '531px',
  position: 'relative',
  overflow: 'hidden',
});

const BackgroundImage = styled('img')({
  width: '100%',
  height: '531px',
  objectFit: 'cover',
});

const TextContainer = styled('div')({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  textAlign: 'center',
});

const Heading = styled('h1')({
  color: '#fff',
  fontSize: '64px',
  fontWeight: 'bold',
  letterSpacing: 'widest',
});

const Hero = () => {
  return (
    <HeroContainer>
      <BackgroundImage src="https://via.placeholder.com/1440x959" alt="Background" />
      <TextContainer>
        <Heading>Let’s explore Rwanda</Heading>
      </TextContainer>
    </HeroContainer>
  );
};

export default Hero;
