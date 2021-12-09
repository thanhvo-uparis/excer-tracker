const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();
 
const app = express();
const PORT = 5000;


app.use(cors());
app.use(express.json());

const URI = "mongodb+srv://thanhvo:node123@cluster0.dha26.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

app.get("/", (request, response) => {
        response.send("get a réussi!");
})

mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log("Contected to DB");
    app.listen(PORT, () => {
        console.log(`Server is running at the port ${PORT}`);
    });
}).catch((err) => {
    console.log('err', err);
});
