import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { App } from './App';
import { CreateUser, HomePage, SendEmail, UpdateUser } from './pages';

export const Root: React.FC = React.memo(() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="home" element={<Navigate to="/" replace />} />

          <Route path="users">
            <Route path="new" element={<CreateUser />} />
            <Route path="edit/:userId" element={<UpdateUser />} />
            <Route path="send/:email" element={<SendEmail />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
});
