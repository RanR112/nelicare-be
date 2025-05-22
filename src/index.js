require("dotenv").config();

const express = require("express");
const cors = require("cors");
const router = require("./routes");
const session = require("express-session")

const app = express();
app.use(cors());
app.use(express.json());

app.use(session({
    secret : 'apinelicare',
    resave : true,
    saveUninitialized : true
}));

app.use('/api/v1', router)

app.get('/api/v1', (req, res) => {
    res.send('API Nelicare')
})

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server berjalan di http://localhost:${PORT}`));