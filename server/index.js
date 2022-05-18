import express from 'express';

const app = express();

const requestHandler = (req, res, next) => {
  // parse the request and formulate a req to API.
};

app.use(requestHandler);
app.listen(process.env.PORT, () => {
  console.log(`listening on Port: ${process.env.port}`);
});
