import express from "express"
import plants from "../data/data.js";
import { error } from "console";


const router = express.Router();

//INDEX
// lettura di tutti gli elementi 
router.get("/", (req, res) => {

    const usiFilter = req.query.usiComuni;

    let result = plants;

    if (usiFilter !== undefined) {

        result = plants.filter((plant) => plant.usiComuni.includes(usiFilter))
    }

    res.json({
        data: result,
        count: result.length
    })
})



//SHOW 
//lettura di un elemento singolo
router.get("/:id", (req, res) => {

    const plantId = req.params.id;
    const plant = plants.find((plant) => plant.id === plantId);

    if (plant === undefined) {
        res.status(404);
        return res.json({
            error: "Pianta non trovata"
        })
    }

    res.json({
        "id": plantId,
        "nomeComune": plant.nomeComune,
        "nomeScientifico": plant.nomeScientifico,
        "immagine": plant.immagine,
        "proprietaPrincipali": plant.proprietaPrincipali,
        "usicomuni": plant.usiComuni,

    })
})

//STORE
//inserisco un nuovo elemento
router.post('/', (req, res) => {
    res.send("Aggiungo una nuova ricetta")

})
//UPDATE
//modifico un elemento
router.put("/:id", (req, res) => {

    const plantId = req.params.id;
    const plant = plants.find((plant) => plant.id === plantId);

    res.json({

        data: `Modifico la pianta ${plant.nomeComune} con id ${plant.id}`,
    })

})
//DELETE
//elimino un elemento

router.delete("/:id", (req, res) => {

    const plantId = req.params.id;
    const index = plants.findIndex((plant) => plant.id === plantId);

    if (index === -1) {
        res.status(404);
        return res.json({
            error: "Pianta non trovata"
        })
    };

    plants.splice(index, 1);

    res.sendStatus(204);

})


export default router;