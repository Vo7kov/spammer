import React, { useEffect, useState } from 'react';
import { Button, Nav, Table } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import { createClient } from '../../shared/http/client.';
import { User } from '../../shared/types/User';

const client = createClient();

export const HomePage: React.FC = React.memo(() => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    client.get<User[]>('/users').then((res) => setUsers(res.data));
  }, []);

  const handleDelete = (userId: string) => {
    client.delete(`/users/${userId}`).then(() => {
      const filteredUsers = users.filter((user) => user.id !== userId);
      setUsers(filteredUsers);
    });
  };

  return (
    <div>
      <LinkContainer to="/users/new">
        <Nav.Link className="text-warning border border-warning text-center py-3 rounded">
          Створити нового користувача
        </Nav.Link>
      </LinkContainer>

      <Table striped bordered hover responsive className="mt-5">
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
                  <LinkContainer to={`/users/send/${user.email}`}>
                    <Nav.Link className="text-primary border border-primary text-center py-3 rounded">
                      Відправити новий лист
                    </Nav.Link>
                  </LinkContainer>

                  <LinkContainer className="mt-3" to={`/users/edit/${user.id}`}>
                    <Nav.Link className="text-success border border-success text-center py-3 rounded">
                      Редагувати
                    </Nav.Link>
                  </LinkContainer>

                  <Button
                    className="w-100 mt-3"
                    variant="danger"
                    onClick={() => handleDelete(user.id)}
                  >
                    Видалити
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
});
