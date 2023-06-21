import * as React from 'react';
import { styled } from '@mui/system';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';

const Header = styled('header')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px',
  // Add other styles as needed
});

const Branding = styled('h1')({
  fontFamily: 'Montserrat',
  fontSize: '30px',
  color: '#D06224',
});

const LocationDateGuest = styled('div')({
  display: 'flex',
  // Add other styles as needed
});

const SearchProfile = styled('div')({
  display: 'flex',
  // Add other styles as needed
});

const ProfileDropdown = styled('div')({
  // Add styles for the profile dropdown
});

const NavigationBar = () => (
  <Header>
    <Branding>outside</Branding>
    <LocationDateGuest>
      <TextField placeholder="Location" variant="outlined" />
      <TextField type="date" variant="outlined" />
      <TextField type="number" placeholder="Guests" variant="outlined" />
    </LocationDateGuest>
  </Header>
);

export default NavigationBar;