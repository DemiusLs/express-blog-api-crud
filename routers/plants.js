import express from "express"
import plants from "../data/data.js";


const router = express.Router();

//INDEX
// lettura di tutti gli elementi 
router.get("/", (req, res) => {

    res.json({
        data: plants,
        count: plants.length
    })
})



//SHOW 
//lettura di un elemento singolo
router.get("/:id", (req, res) => {

    const plantId = req.params.id;
    const plant = plants.find()

    res.json({
        data: plants,
        count: plants.length
    })
})

//STORE
//inserisco un nuovo elemento

//UPDATE
//modifico un elemento

//DELETE
//elimino un elemento



export default router;