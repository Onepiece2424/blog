import React from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

// components
import Reference from './containers/Reference';
import Contact from './containers/contact/Contact';
import Edamam from './containers/edamam_api/Edamam'
import HomeTown from './containers/home/HomeTown'
import Count from './containers/count/Count'
import MainForm from './containers/form/MainForm';
import Pointer from './containers/point/Pointer';
import AlphaNumeral from './containers/jksonplaceholder_api/AlphaNumeral';


function App() {
  const REACT_APP_S = "6LeHHG4jAAAAAKLzo5sZo5PbUJsXPIyHBC7G0yw5"

  return (
    <GoogleReCaptchaProvider reCaptchaKey={REACT_APP_S} language="ja">
      <Contact />
      <Pointer />
      <MainForm />
      <Count />
      <HomeTown />
      <Reference />
      <br></br>
      <br></br>
      <Edamam />
      <AlphaNumeral />
    </GoogleReCaptchaProvider>
  );
}

export default App;
