import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className="header">
      <div>
        <h1>
          <a className="logo" href="App.js">outside</a>
        </h1>
      </div>
      <div>
        <div>
          <img src="/public/location.svg" alt="Location icon"></img>
          <div class="center content-inputs">
          <vs-input border color="#D06224" type="Location" v-model="value" placeholder="Add Location" />
          </div>
        </div>
        <div>
          <img src="/public/calendar.svg" alt="Calendar icon"></img>
          <div class="center content-inputs">
          <vs-input border color="#D06224" type="Date" v-model="value" placeholder="Add Date" />
          </div>
        </div>
        <div>
          <img src="/public/profile.svg" alt="Profile icon"></img>
          <div class="center content-inputs">
          <vs-input border color="#D06224" type="Guests" v-model="value" placeholder="Add Guests" />
          </div>
        </div>
        <div>
          <img src="/public/search-normal.svg" alt="Search icon"></img>
          <h2>Search</h2>
        </div>
        
      </div>
      <div>
        <img src="/public/arrow-down.svg" alt="dropdown arrow"></img>
        <img src="/public/profile-circle.svg" alt="profile"></img>
      </div>
      </header>

  );
};

export default Header;
