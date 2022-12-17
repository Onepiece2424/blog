import React,{ useRef,useCallback,useEffect } from 'react';
import { Field } from 'redux-form';
import TokenForm from './TokenForm';

// v3
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

const SubForm = () => {

  const elm = useRef(null)

  // recaptchav3 token生成
  const { executeRecaptcha } = useGoogleReCaptcha();
  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
      return;
    }

    const recaotchaToken = await executeRecaptcha('yourAction');

    elm.current = recaotchaToken

  }, [executeRecaptcha]);

  useEffect(() => {
    handleReCaptchaVerify();
  }, [handleReCaptchaVerify]);



  return (
    <div>
      <Field name="age" component="input" />
      <br></br>
      <Field name="job" component="input" value={elm} />
      <br></br>
      <TokenForm />
    </div>
  )
}

export default SubForm
