import { useRef,useCallback,useEffect } from 'react';
import { Field } from 'redux-form'

// v3
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

const TokenForm = () => {

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

    elm.current = recaotchaToken

  }, [executeRecaptcha]);

  useEffect(() => {
    handleReCaptchaVerify();
  }, [handleReCaptchaVerify]);

  return (
    <>
      <Field name="length" component="input" type="hidden" value={elm} />
      <br></br>
    </>
  )
}

export default TokenForm
