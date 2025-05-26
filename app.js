import express from "express"
import plantsRouter from "./routers/plants.js"
const app = express()
const port = 3000

app.use(express.static("public"))


app.get('/', (req, res) => {

    const resData = {

        data: "Benvenuti nell'api delle piante officinali"
    };

    res.json(resData);
})

// Utilizzo il plantsRouter per gestire le richieste a plants
app.use("/plants" , plantsRouter);



app.listen(port, () => {

    console.log(`Example app listening on port ${port}`)
})