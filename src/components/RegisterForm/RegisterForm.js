import Button from 'components/Button';
import { useDispatch } from 'react-redux';

import { register } from 'redux/auth/operations';

import { Form, Input, Label, Title } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        <Title>Username</Title>
        <Input type="text" name="name" placeholder="Tetiana" />
      </Label>
      <Label>
        <Title>Email</Title>
        <Input type="email" name="email" placeholder="example@gmail.com" />
      </Label>
      <Label>
        <Title>Password</Title>
        <Input type="password" name="password" placeholder="*******" />
      </Label>
      <Button type="submit">Register</Button>
    </Form>
  );
};
