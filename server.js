const mongoose = require('mongoose');
const dotenv = require('dotenv');

// hande uncaught exceptions
process.on('uncaughtException', (err) => {
  console.log('Uncaught exceptions! Shutting down...');
  console.log(err.name, err.message);
  process.exit();
});

dotenv.config({
  path: './config.env',
});

const app = require('./app.js');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(console.log('DB connection succesfull'));

const port = 8000;
const server = app.listen(port, () => {
  console.log(`App running on port: ${port}`);
});

// handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.log('Unhandled rejections! Shutting down...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
