const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/database');
const itemRoutes = require('./routes/itemRoutes');

require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 5000;
connectDB();
app.use(cors());
app.use(bodyParser.json());
app.use('/api/items', itemRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
