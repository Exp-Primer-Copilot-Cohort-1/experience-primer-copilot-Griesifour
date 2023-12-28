//Create web server
const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

// Create a router
const router = express.Router();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set the route
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

router.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

router.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'contact.html'));
});

router.get('/services', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'services.html'));
});

// Set the router to be used
app.use('/', router);

// Start the server
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
