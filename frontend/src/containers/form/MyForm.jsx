import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form,Button,ButtonToolbar } from 'react-bootstrap';

const MyForm = props => {

  const { handleSubmit, pristine, reset, submitting } = props;

  return (
    <>
      <Form horizontal onSubmit={handleSubmit}>
        <Field
          id={'name'}
          name="name"
          component="input"
          type="text"
          placeholder="Name"
          className={'form-control'}
        />
        <ButtonToolbar>
          <Button bsStyle={'primary'} type="submit" disabled={pristine || submitting}>登録</Button>
          <Button type="button" disabled={pristine || submitting} onClick={reset}>クリア</Button>
        </ButtonToolbar>
      </Form>
    </>
  );
};

export default reduxForm({
  form: 'myForm',
})(MyForm);
