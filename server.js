const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.post("/process-data", (req, res) => {
    const { data } = req.body;

    if (!Array.isArray(data)) {
        return res.status(400).json({ error: "Invalid input format" });
    }

    // Extracting numbers and alphabets
    const evenNumbers = [];
    const oddNumbers = [];
    const alphabets = [];

    data.forEach(item => {
        if (!isNaN(item)) { // Check if it's a number
            const num = Number(item);
            if (num % 2 === 0) {
                evenNumbers.push(item);
            } else {
                oddNumbers.push(item);
            }
        } else if (/^[a-zA-Z]$/.test(item)) { // Check if it's a si
