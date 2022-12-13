import axios from 'axios'
import { useState } from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

const Contact = () => {

  const [message,setMessage] = useState('');
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');

  const [token, setToken] = useState('');
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleSubmit = (e) =>{
    e.preventDefault();
  }

  const postContact = async() => {

    const reCaptchaToken = await executeRecaptcha('call_api');
    setToken(reCaptchaToken);
    console.log(token)
    await axios.post('http://localhost:3000/api/v1/posts/call_api.json',{
      name: name,
      email: email,
      message: message,
      token: token
    })
    .then(res => {
      console.log(res)
      if(res.status === 204){
        console.log('204');
      } else if(res.status === 500){
        console.log('500');
      }
    })
    .catch(error => {
      console.log(error);
    })
  }

  return (
      <Container>
        <Form onSubmit={handleSubmit} className="my-3">
          <Form.Group>
            <br></br>
            <Form.Label>お名前</Form.Label>
            <br></br>
            <Form.Control value={name} onChange={(e) => setName(e.target.value)} />
          </Form.Group>
          <Form.Group>
            <br></br>
            <Form.Label>メールアドレス</Form.Label>
            <br></br>
            <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>
          <br></br>
          <Form.Group className="mb-3" controlId="formBiography">
            <Form.Label>お問い合わせフォーム</Form.Label>
            <br></br>
            <Form.Control as="textarea" value={message} onChange={(e) => setMessage(e.target.value)} style={{ height: '100px' }} />
          </Form.Group>
          <br></br>
          <div className="mb-3 text-muted">
            このサイトは reCAPTCHA によって保護されており、Google の
            <a href="https://policies.google.com/privacy">プライバシー ポリシー</a>と
            <a href="https://policies.google.com/terms">利用規約</a>が適用されます。
          </div>
          <br></br>
          <Form.Group className="mb-3 text-end">
            <Button variant="dark" type="submit" onClick={postContact}>送信する</Button>
          </Form.Group>
        </Form>
      </Container>
  )
}
export default Contact;
