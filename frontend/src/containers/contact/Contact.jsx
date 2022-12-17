import { Field, reduxForm, Fields } from 'redux-form';
import { useState,useCallback,useEffect,useRef } from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import showResults from '../func/showResults';
import renderFields from './renderFields';

const Contact = (props) => {

  const { handleSubmit, change } = props
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [message,setMessage] = useState('');
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');

  const elm = useRef(null)

  // const handleSubmit = (e) =>{
  //   // e.preventDefault();
  // }

  // const postContact = useCallback(async() => {

  //   const reCaptchaToken = await executeRecaptcha('call_api');
  //   setToken(reCaptchaToken);
  //   console.log(token)
  //   await axios.post('http://localhost:3000/api/v1/posts/call_api.json',{
  //     name: name,
  //     email: email,
  //     message: message,
  //     token: token
  //   })
  //   .then(res => {
  //     console.log(res)
  //     if(res.status === 204){
  //       console.log('204');
  //     } else if(res.status === 500){
  //       console.log('500');
  //     }
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   })
  // },[executeRecaptcha])

  // useEffect(() => {
  //   postContact();
  // }, [postContact]);

  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
      return;
    }

    const recaotchaToken = await executeRecaptcha('yourAction');

    // Field component valueの確認
    // console.log(elm.current)

    // hiddenしたField valueへリキャプチャトークンを代入
    /* eslint-disable */
    elm.current = change("recaptchatoken", recaotchaToken)

  }, [executeRecaptcha]);

  useEffect(() => {
    handleReCaptchaVerify();
  }, [handleReCaptchaVerify]);

  return (
      <Container>
        <Form onSubmit={handleSubmit(showResults)} className="my-3">
          <Form.Group>
            <br></br>
            <Form.Label>お名前</Form.Label>
            <br></br>
            <Field name="name" component="input" value={name} onChange={(e) => setName(e.target.value)} />
          </Form.Group>
          <Form.Group>
            <br></br>
            <Form.Label>メールアドレス</Form.Label>
            <br></br>
            <Field name="email" component="input" value={email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>
          <br></br>
          <Form.Group className="mb-3" controlId="formBiography">
            <Form.Label>お問い合わせフォーム</Form.Label>
            <br></br>
            <Field name="message" component="input" value={message} onChange={(e) => setMessage(e.target.value)} />
          </Form.Group>
          <br></br>
          <Field name="recaptchatoken" component="input" type="hidden" value={elm} />
          <Form.Label>名前（性）</Form.Label>
          <Form.Label>名前（名）</Form.Label>
          <Fields names={[ 'firstName', 'lastName' ]} component={renderFields}/>
          <br></br>
          <br></br>
          <div className="mb-3 text-muted">
            このサイトは reCAPTCHA によって保護されており、Google の
            <a href="https://policies.google.com/privacy">プライバシー ポリシー</a>と
            <a href="https://policies.google.com/terms">利用規約</a>が適用されます。
          </div>
          <br></br>
          <Form.Group className="mb-3 text-end">
            <Button variant="dark" type="submit" onClick={handleReCaptchaVerify}>送信する</Button>
          </Form.Group>
        </Form>
      </Container>
  )
}

export default reduxForm({
  form: 'ContactForm',
})(Contact);
