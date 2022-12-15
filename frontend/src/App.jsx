import React from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
// components
// import Reference from './containers/Reference';
// import Contact from './containers/contact/Contact';
// import Edamam from './containers/api/Edamam'
import HomeTown from './containers/home/HomeTown'
// import Count from './containers/Count'
import MainForm from './containers/form/MainForm';
import Pointer from './containers/point/Pointer';



function App() {
  const REACT_APP_S = "6LeHHG4jAAAAAKLzo5sZo5PbUJsXPIyHBC7G0yw5"

  return (
    <GoogleReCaptchaProvider reCaptchaKey={REACT_APP_S} language="ja">
      <Pointer />
      <MainForm />
      {/* <Count /> */}
      {/* <Contact /> */}
      <br></br>
      <br></br>
      <HomeTown />
    </GoogleReCaptchaProvider>
  );
}

export default App;
