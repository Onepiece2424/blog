import { useState, useRef,useCallback,useEffect } from 'react';
import { Field } from 'redux-form'

// v3
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

const TokenForm = () => {

  const [token,setToken] = useState('')

  const elm = useRef(null)
  console.log(elm.current)

  // recaptchav3 token生成
  const { executeRecaptcha } = useGoogleReCaptcha();
  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
      console.log('Execute recaptcha not yet available');
      return;
    }

    const recaotchaToken = await executeRecaptcha('yourAction');
    console.log(recaotchaToken)

    setToken(recaotchaToken)

  }, [executeRecaptcha]);

  useEffect(() => {
    handleReCaptchaVerify();
  }, [handleReCaptchaVerify]);

  return (
    <>
      <Field name="length" component="input" type="hidden" ref={elm} value={token} />
      <br></br>
    </>
  )
}

export default TokenForm
