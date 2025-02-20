const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.post("/process-data", (req, res) => {
    const { data } = req.body;

    if (!Array.isArray(data)) {
        return res.status(400).json({ error: "Invalid input format" });
    }

    const evenNumbers = [];
    const oddNumbers = [];
    const alphabets = [];

    data.forEach(item => {
        if (!isNaN(item)) { 
            const num = Number(item);
            if (num % 2 === 0) {
                evenNumbers.push(item);
            } else {
                oddNumbers.push(item);
            }
        } else if (/^[a-zA-Z]$/.test(item)) { // Check if it's a single alphabet
            alphabets.push(item.toUpperCase());
        }
    });

    const response = {
        is_success: true,
        user_id: "john_doe_17091999",
        email: "john@xyz.com",
        roll_number: "ABCD123",
        odd_numbers: oddNumbers,
        even_numbers: evenNumbers,
        alphabets: alphabets
    };

    res.json(response);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
