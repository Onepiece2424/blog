import React from 'react';
import './App.css';

// components
// import Reference from './containers/Reference';
import Edamam from './containers/api/Edamam'
// import Contact from './containers/contact/Contact';

import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

function App() {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={process.env.REACT_APP_S_KEY} language="ja">
      {/* <Reference />
      <Contact /> */}
      <Edamam />
    </GoogleReCaptchaProvider>
  );
}

export default App;
