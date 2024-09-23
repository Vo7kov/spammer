import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { createClient } from '../../shared/http/client.';

const schema = z.object({
  lastName: z.string().trim().min(1, {
    message: 'Вказати прізвище',
  }),
  firstName: z.string().trim().min(1, {
    message: 'Вказати Ім`я',
  }),
  surName: z.string().trim().min(1, {
    message: 'Вказати По батькові',
  }),
  email: z
    .string()
    .trim()
    .min(1, {
      message: 'Вказати По батькові',
    })
    .email({
      message: 'Некоректний формат',
    }),
});

export const UpdateUser: React.FC = React.memo(() => {
  const client = createClient();
  const navigate = useNavigate();

  const { userId } = useParams();

  const {
    register,
    handleSubmit,
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: z.infer<typeof schema>) => {
    const { email, firstName, lastName, surName } = data;

    client
      .patch(`/users/update`, {
        id: userId,
        email,
        lastName,
        firstName,
        surName,
      })
      .then(() => navigate('/'));
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group controlId="lastName">
        <Form.Control
          {...register('lastName')}
          type="text"
          placeholder="Прізвище"
        />
      </Form.Group>

      <Form.Group className="mt-3" controlId="firstName">
        <Form.Control
          {...register('firstName')}
          type="text"
          placeholder="Ім'я"
        />
      </Form.Group>

      <Form.Group className="mt-3" controlId="surName">
        <Form.Control
          {...register('surName')}
          type="text"
          placeholder="По батькові"
        />
      </Form.Group>

      <Form.Group className="mt-3" controlId="email">
        <Form.Control {...register('email')} type="text" placeholder="Пошта" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
});
