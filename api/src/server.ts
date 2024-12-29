import express from 'express';
import morgan from 'morgan';
const app = express();
app.use(morgan('short'));
const port = process.env.PORT || 3000;
const start = async () => {
  app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
  });
};
start();
export default app;
