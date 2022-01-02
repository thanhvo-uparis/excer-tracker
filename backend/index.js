const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const papayeRouter = require('./routes/papaye');
const storeRouter = require('./routes/store');

require('dotenv').config();
 
const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

const URI = "mongodb+srv://papaye:node123@cluster0.ocd3j.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


app.get("/", (request, response) => {
        response.send("Connectedd");
})

app.use("/papayes", papayeRouter);
app.use("/stores", storeRouter);

mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log("Contected to DB");
    app.listen(port, () => {
        console.log(`Server is running at the port ${port}`);
    });
}).catch((err) => {
    console.log('err', err);
});
