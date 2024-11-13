const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));
app.get('/about', (req, res) => res.sendFile(path.join(__dirname, 'public', 'about.html')));
app.get('/contact', (req, res) => res.sendFile(path.join(__dirname, 'public', 'contact.html')));

app.post('/submit-contact', (req, res) => {
    const { name, email, message } = req.body;
    console.log(`Form submitted:`);
    console.log(`- Name: ${name}`);
    console.log(`- Email: ${email}`);
    console.log(`- Message: ${message}`);
    res.send(`Thank you, ${name}! We have received your message: "${message}" and will get back to you at ${email}.`);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
