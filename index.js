const express = require('express');
const app = express();
const port = 3000;
const routes = require('./routers.js');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(routes);

app.listen(port, () => {
  console.log(`Server listening at port ${port}`);
});
