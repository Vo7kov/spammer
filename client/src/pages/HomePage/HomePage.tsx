import React, { useEffect, useState } from 'react';
import { Nav, Table } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import { createClient } from '../../shared/http/client.';
import { User } from '../../shared/types/User';

const client = createClient();

export const HomePage: React.FC = React.memo(() => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    client
      .get<User[]>('http://localhost:8000/users')
      .then((res) => setUsers(res.data));
  }, []);

  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>Id</th>
          <th>Email</th>
          <th>Прізвище</th>
          <th>Ім'я</th>
          <th>По батькові</th>
          <th>Дії</th>
        </tr>
      </thead>
      <tbody>
        {users
          .sort((a, b) => a.id.localeCompare(b.id))
          .map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.email}</td>
              <td>{user.lastName}</td>
              <td>{user.firstName}</td>
              <td>{user.surName}</td>
              <td>
                <LinkContainer to={`/users/send/${user.id}`}>
                  <Nav.Link className="text-primary border border-primary text-center py-3 rounded">
                    Відправити новий лист
                  </Nav.Link>
                </LinkContainer>

                <LinkContainer className="mt-3" to={`/users/edit/${user.id}`}>
                  <Nav.Link className="text-success border border-success text-center py-3 rounded">
                    Редагувати
                  </Nav.Link>
                </LinkContainer>

                <LinkContainer className="mt-3" to={`/users/send/${user.id}`}>
                  <Nav.Link className="text-danger border border-danger text-center py-3 rounded">
                    Видалити
                  </Nav.Link>
                </LinkContainer>
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
});
