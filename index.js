const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = 8000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('GET request received');
});

app.get('/products', (req, res) => {
    const products = [
        { id: 1, name: 'Corolla', price: 100 },
        { id: 2, name: 'Civic', price: 200 },
        { id: 3, name: 'WagonR', price: 300 }
    ];
    res.send({ message: 'Products fetched successfully', data: products });
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send({ message: 'POST request received', data: req.body });
});

app.put('/', (req, res) => {
    console.log(req.body);
    res.send({ message: 'PUT request received', data: req.body });
});

app.patch('/', (req, res) => {
    console.log(req.body);
    res.send({ message: 'PATCH request received', data: req.body });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
