import * as React from 'react';
import { styled } from '@mui/system';
import TextField from '@mui/material/TextField';
import LocationIcon from '../Icons/LocationIcon.js';
import CalendarIcon from '../Icons/CalendarIcon.js';
import ProfileIcon from '../Icons/ProfileIcon.js';


const Header = styled('header')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2px',
  backgroundColor: '#F9FAFB',
  gap: '41px',
  position: 'relative',
  zIndex: '1',
  Padding: '8px, 63px',
});


const Branding = styled('div')({
  color: '#D97706',
  fontSize: '30px',
  fontWeight: 'bold',
  paddingRight: '1',
});

const Frame503 = styled('div')({
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
  gap: '41px',
});

const TravelDates = styled('div')({
  position: 'relative',
  width: '1000px',
  height: '80px',
  backgroundColor: '#F9FAFB',
  borderRadius: '72.67px',
  zIndex: '0',
  paddingLeft: '48px',
  paddingRight: '48px',
  justifyContent: 'space-between',
  left: '108px',
});

const Rectangle4 = styled('div')({
  position: 'absolute',
  width: '1000px',
  height: '60px',
  left: '0',
  top: '0',
  backgroundColor: '#F9FAFB',
  borderRadius: '72.67px',
});

const SearchBackground = styled('div')({
  position: 'absolute',
  width: '166.67px',
  height: '48px',
  left: '824px',
  top: '8px',
  backgroundColor: '#FAE0A5', // Update the background color here
  borderRadius: '72.67px',
});


const SearchContainer = styled('div')({
  position: 'absolute',
  width: '180px',
  height: '34px',
  left: '824px',
  top: '13px',
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
});

const Search = styled('div')({
  position: 'absolute',
  left: '60px',
  top: '-30%',
  color: '#D97706',
  fontSize: '14px',
  fontWeight: 'bold',
});

const IconlyCurvedSearch = styled('div')({
  position: 'absolute',
  width: '20px',
  height: '19.20px',
  left: '0',
  top: '7px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'start',
});

const LocationContainer = styled('div')({
  position: 'absolute',
  width: '150px',
  height: '34px',
  left: '28px',
  top: '13px',
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
});



const LocationLabel = styled('div')({
  position: 'absolute',
  left: '30px',
  top: '0',
  color: '#4B5563',
  fontSize: '14px',
  fontWeight: '500',
});

const AddLocation = styled('div')({
  position: 'absolute',
  left: '30px',
  top: '19px',
  color: '#9CA3AF',
  fontSize: '14px',
  fontWeight: '500',
});

const DateContainer = styled('div')({
  position: 'absolute',
  width: '150px',
  height: '34px',
  left: '204px',
  top: '13px',
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
});

const DateLabel = styled('div')({
  position: 'absolute',
  left: '30px',
  top: '0',
  color: '#4B5563',
  fontSize: '14px',
  fontWeight: '500',
});

const AddDates = styled('div')({
  position: 'absolute',
  left: '30px',
  top: '19px',
  color: '#9CA3AF',
  fontSize: '14px',
  fontWeight: '500',
});

const GuestsContainer = styled('div')({
  position: 'absolute',
  width: '150px',
  height: '34px',
  left: '380px',
  top: '13px',
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
});

const GuestIcon = styled('div')({
  position: 'absolute',
  width: '20px',
  height: '19.20px',
  left: '0',
  top: '7px',
});

const GuestsLabel = styled('div')({
  position: 'absolute',
  left: '30px',
  top: '0',
  color: '#4B5563',
  fontSize: '14px',
  fontWeight: '500',
});

const AddGuests = styled('div')({
  position: 'absolute',
  left: '30px',
  top: '19px',
  color: '#9CA3AF',
  fontSize: '14px',
  fontWeight: '500',
});

const Group11 = styled('div')({
  position: 'relative',
  width: '114px',
  height: '12px',
});

const ProfileDropdownBack = styled('div')({
  position: 'absolute',
  width: '114px',
  height: '48px',
  left: 'calc(50% - 57px)', // Update the left property
  top: '-19px',
  backgroundColor: '#FAE0A5',
  borderRadius: '50px',
});




const Group10 = styled('div')({
  position: 'absolute',
  width: '70px',
  height: '34px',
  left: '25px',
  top: '7px',
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
});

const ProfileCircle = styled('div')({
  position: 'relative',
  width: '34px',
  height: '34px',
});

const NavigationBar = () => (
  <Header>
    <Branding>outside</Branding>
    <Frame503>
      <TravelDates>
        <Rectangle4 />
        <SearchBackground />
        <SearchContainer>
          <IconlyCurvedSearch>
            <div className="Search" />
          </IconlyCurvedSearch>
          <Search>
          <TextField
              label="Search"
              variant="standard"
              InputProps={{
                disableUnderline: true,
                style: {
                  fontSize: '14px',
                  color: '#D97706',
                  fontWeight: '500',
                },
              }}
              InputLabelProps={{
                style: {
                  fontSize: '14px',
                  color: '#D97706',
                  fontWeight: '500',
                },
              }}
            />
        </Search>
        </SearchContainer>
        <LocationContainer>
          <LocationIcon>
          </LocationIcon>
          <LocationLabel>Location</LocationLabel>
          <AddLocation>
            <TextField
              label="Add location"
              variant="standard"
              InputProps={{
                disableUnderline: true,
                style: {
                  fontSize: '14px',
                  color: '#9CA3AF',
                  fontWeight: '500',
                },
              }}
              InputLabelProps={{
                style: {
                  fontSize: '14px',
                  color: '#4B5563',
                  fontWeight: '500',
                },
              }}
            />
          </AddLocation>
        </LocationContainer>
        <DateContainer>
          <CalendarIcon>
          </CalendarIcon>
          <DateLabel>Date</DateLabel>
          <AddDates>
            <TextField
              label="Add dates"
              variant="standard"
              InputProps={{
                disableUnderline: true,
                style: {
                  fontSize: '14px',
                  color: '#9CA3AF',
                  fontWeight: '500',
                },
              }}
              InputLabelProps={{
                style: {
                  fontSize: '14px',
                  color: '#4B5563',
                  fontWeight: '500',
                },
              }}
            />
          </AddDates>
        </DateContainer>
        <GuestsContainer>
          <ProfileIcon>
          </ProfileIcon>
          <GuestsLabel>Guests</GuestsLabel>
          <AddGuests>
            <TextField
              label="Add guests"
              variant="standard"
              InputProps={{
                disableUnderline: true,
                style: {
                  fontSize: '14px',
                  color: '#9CA3AF',
                  fontWeight: '500',
                },
              }}
              InputLabelProps={{
                style: {
                  fontSize: '14px',
                  color: '#4B5563',
                  fontWeight: '500',
                },
              }}
            />
          </AddGuests>
        </GuestsContainer>
      </TravelDates>
      <Group11>
        <ProfileDropdownBack />
        <Group10>
          <ProfileCircle>
            <div className="ProfileCircle" />
          </ProfileCircle>
        </Group10>
      </Group11>
    </Frame503>
  </Header>
);

export default NavigationBar;
