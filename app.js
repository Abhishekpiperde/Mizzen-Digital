const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes')

const app = express();

app.use(bodyParser.json());
app.use("/api", userRoutes);

const PORT = 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));