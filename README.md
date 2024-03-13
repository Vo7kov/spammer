## Backend:

  Створи базу в mySql, Далі в `.env` пропиши все, що необхідно, візьми `.env.example`. Для `SMTP_USER` створи ліву пошту та підключи 2 факторну аутентифікацію, далі: https://docs.google.com/document/d/11_4joamBWNDj3ebfa2_8opw0KRSkR8DoDWwMM-bdYzA/edit?usp=sharing
  Після цього:

  ```
  cd server/
  npm i
  npm run db:update
  npm run dev
  ```

  Ще корисна штука:
  ```
  npm run db:studio
  ```
  Це якби адмінка для бд. Думаю, розберешся

## Frontend:

  Тут простіше. Так само по аналогії з беком пропиши в `.env` з `.env.example` адресу твого беку, щось накшталт `http://localhost:8000`. Далі:

  ```
  cd client/
  npm i
  npm run dev
  ```

  Будуть питання, або інші проекти - `@gosyav` в телеграмі