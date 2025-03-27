const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const name = "Gokul";
app.get('/', (req, res) => {
    res.send(`Hello, ShopEasy by ${name}...🚀`);
});

const server = app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = { app, server,name};
