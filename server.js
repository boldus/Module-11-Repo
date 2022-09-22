const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/notes', require('./routes/api'));

app.use('/', require('./routes/html'));

const PORT = process.env.PORT || 5502;

app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}....`);
});