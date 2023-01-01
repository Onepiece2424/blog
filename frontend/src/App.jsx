import React from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

// components
// import Reference from './containers/Reference';
// import Contact from './containers/contact/Contact';
// import Edamam from './containers/edamam_api/Edamam'
// import HomeTown from './containers/home/HomeTown'
// import Count from './containers/count/Count'
// import MainForm from './containers/form/MainForm';
// import Pointer from './containers/point/Pointer';
// import AlphaNumeral from './containers/jksonplaceholder_api/AlphaNumeral';
// import MainContainer from './containers/items/MainContainer';
import Memo from './containers/custom/Memo';

function App() {

  return (
    <GoogleReCaptchaProvider reCaptchaKey={process.env.REACT_APP_S} language="ja">
      <Memo />
    </GoogleReCaptchaProvider>
  );
}

export default App;
