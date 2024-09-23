## Backend:

Configure everything necessary in the `.env` file, using `.env.example` as a reference. For `SMTP_USER`, create a dummy email and enable two-factor authentication
<br />
<br />
Then:
![image](https://github.com/user-attachments/assets/bf49849b-3e76-4885-847e-f402c57c2049)
![image](https://github.com/user-attachments/assets/33b0aafb-72e1-4e1e-b6f7-c4d2b893decd)
![image](https://github.com/user-attachments/assets/991c5e23-1a3c-4c27-94f1-fab28af2e116)
![image](https://github.com/user-attachments/assets/90598953-3310-49a1-ab91-f405bd7f7648)
![image](https://github.com/user-attachments/assets/9c8e9961-219d-45cd-b763-a066bbde6017)


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
