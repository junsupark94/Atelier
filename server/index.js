const express = require('express');
const path = require('path');
require('dotenv').config()
const axios = require('axios');

const app = express();
const port = 3000;

// Logging and parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Router
const router = require('./routes.js');

// Set up our routes
app.use(router);

// Serve the client files
app.use(express.static(path.join(__dirname, '/../client/dist')));


// Set up what we are listening on
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// app.get('/reviews', (req, res) => {
//   axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/', {
//     headers: {
//       Authorization: TOKEN,
//     },
//     params: {
//       page: req.query.page,
//       count: req.query.count,
//       product_id: req.query.product_id,
//     },
//   })
//     .then((response) => {
//       res.send(response.data);
//     })
//     .catch((err) => { res.status(404).send(err); });
// });

// app.get('/reviews/meta', (req, res) => {
//   axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta', {
//     headers: {
//       Authorization: TOKEN,
//     },
//     params: {
//       product_id: req.query.product_id,
//     },
//   })
//     .then((response) => {
//       res.send(response.data);
//     })
//     .catch((err) => { res.status(404).send(err); })
// })