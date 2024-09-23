import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { createClient } from '../../shared/http/client.';

const schema = z.object({
  lastName: z.string().trim().min(1, {
    message: 'Please provide your last name',
  }),
  firstName: z.string().trim().min(1, {
    message: 'Please provide your first name',
  }),
  surName: z.string().trim().min(1, {
    message: 'Please provide your middle name',
  }),
  email: z
    .string()
    .trim()
    .min(1, {
      message: 'Please provide your email',
    })
    .email({
      message: 'Invalid email format',
    }),
});

export const CreateUser: React.FC = React.memo(() => {
  const client = createClient();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: z.infer<typeof schema>) => {
    const { email, firstName, lastName, surName } = data;

    client
      .post('/users/create', {
        email,
        lastName,
        firstName,
        surName,
      })
      .then(() => navigate('/'));
  };

  console.log(errors);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group controlId="lastName">
        <Form.Control
          {...register('lastName')}
          type="text"
          placeholder="Last Name"
        />
      </Form.Group>

      <Form.Group className="mt-3" controlId="firstName">
        <Form.Control
          {...register('firstName')}
          type="text"
          placeholder="First Name"
        />
      </Form.Group>

      <Form.Group className="mt-3" controlId="surName">
        <Form.Control
          {...register('surName')}
          type="text"
          placeholder="Middle Name"
        />
      </Form.Group>

      <Form.Group className="mt-3" controlId="email">
        <Form.Control {...register('email')} type="text" placeholder="Email" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
});
