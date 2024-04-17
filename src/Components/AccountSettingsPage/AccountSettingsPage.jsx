import React from 'react';
import './AccountSettingsPage.css';
import {Helmet} from 'react-helmet';
import './AccountSettingsPage.css';
import Navbar from './Navbar';
import AccountSettings from './AccountSettings';

function AccountSettingsPage() {
  return (
    <div>
      <Helmet>
        <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <link href='https://fonts.googleapis.com/css?family=Blinker' rel='stylesheet'/>
        <link rel = "stylesheet" href="styles.css"/>
        <title>Account Settings</title>
        <script src="script.js" defer></script>
      </Helmet>
      <Navbar />
      <AccountSettings />
    </div>
  );
}

export default App;
