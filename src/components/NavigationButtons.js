import * as React from 'react';
import { styled } from '@mui/system';

import ButtonStyle from '../components/ButtonStyle';
import ButtonFilter from '../components/ButtonFilter';

const Container = styled('div')({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingLeft: 61,
  paddingRight: 1213,
  paddingBottom: 16,
  paddingTop: 16,
});

const ButtonContainer = styled('div')({
  display: 'flex',
  gap: 32,
});

const NavigationButtons = () => {
    return (
      <div>
        <Container>
          <ButtonContainer>
            <ButtonStyle text={"SPACES"} />
            <ButtonStyle text={"EXPERIENCE"} />
          </ButtonContainer>
          <ButtonFilter />
        </Container>
      </div>
    );
  };
  

export default NavigationButtons;
