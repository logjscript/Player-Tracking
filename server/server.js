const express = require('express');
const rosterRoutes = require('./routes');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT ?? 5200;

app.use(express.json());
app.use(cors());

app.use('/api/v1/roster', rosterRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));