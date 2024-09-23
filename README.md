## Backend:

Configure everything necessary in the `.env` file, using `.env.example` as a reference. For `SMTP_USER`, create a dummy email and enable two-factor authentication. Follow this link for further instructions: https://docs.google.com/document/d/11_4joamBWNDj3ebfa2_8opw0KRSkR8DoDWwMM-bdYzA/edit?usp=sharing

After that:

```
cd server/
npm i
npm run db:update
npm run dev
```

## Frontend:

Similarly, configure your `.env` file based on `.env.example` with the address of your backend, something like `http://localhost:8000`. Then:

```
cd client/
npm i
npm run dev
```
