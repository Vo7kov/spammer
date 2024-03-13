import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { createClient } from '../../shared/http/client.';

const schema = z.object({
  text: z.string().trim().min(1, {
    message: 'Вказати текст',
  }),
});

export const SendEmail: React.FC = React.memo(() => {
  const client = createClient();
  const navigate = useNavigate();
  const { email } = useParams();

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: z.infer<typeof schema>) => {
    const { text } = data;

    client
      .post('/send', {
        email,
        text,
      })
      .then(() => navigate('/'));
  };

  console.log(errors);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="text"
        control={control}
        render={({ field }) => (
          <Form.Group controlId="text">
            <Form.Control
              value={field.value}
              as="textarea"
              type="text"
              placeholder="Текст"
              onChange={(e) => field.onChange(e.target.value)}
            />
          </Form.Group>
        )}
      />

      <Form.Select
        className="mt-3"
        onChange={(e) => setValue('text', e.target.value)}
      >
        <option value="Перша">Перша</option>
        <option value="Друга">Друга</option>
        <option value="Третя">Третя</option>
      </Form.Select>

      <Button className="mt-4" variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
});
