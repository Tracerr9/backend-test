const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

app.post('/calculate', (req, res) => {
    const { a, b, operation } = req.body;
    let result;

    switch (operation) {
        case 'add':
            result = parseFloat(a) + parseFloat(b);
            break;
        case 'subtract':
            result = parseFloat(a) - parseFloat(b);
            break;
        case 'multiply':
            result = parseFloat(a) * parseFloat(b);
            break;
        case 'divide':
            if (b == 0) {
                return res.json({ error: 'Division by zero is not allowed' });
            }
            result = parseFloat(a) / parseFloat(b);
            break;
        default:
            return res.status(400).json({ error: 'Invalid operation' });
    }

    res.json({ result });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
