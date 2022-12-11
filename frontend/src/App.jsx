import React from 'react';
import './App.css';

// components
// import Reference from './containers/Reference';
import Contact from './containers/contact/Contact';
// import Edamam from './containers/api/Edamam'

import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

function App() {
  const REACT_APP_S = "6LeHHG4jAAAAAKLzo5sZo5PbUJsXPIyHBC7G0yw5"

  return (
    <GoogleReCaptchaProvider reCaptchaKey={REACT_APP_S} language="ja">
      <Contact />
      {/* <Edamam /> */}
    </GoogleReCaptchaProvider>
  );
}

export default App;
