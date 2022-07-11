import express from 'express';

const app = express();

const port = 8900;

app.listen(port, function() {
  console.log(`server connect success on http://127.0.0.1:${port}`);
});
