import plants from "../data/data.js";



const index = (req, res) => {

    const usiFilter = req.query.usiComuni;

    let result = plants;

    if (usiFilter !== undefined) {

        result = plants.filter((plant) => plant.usiComuni.includes(usiFilter))
    }

    res.json({
        data: result,
        count: result.length
    })
};

const show = (req, res) => {

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
}

const store = (req, res) => {
    res.send("Aggiungo una nuova ricetta")

}

const update = (req, res) => {

    const plantId = req.params.id;
    const plant = plants.find((plant) => plant.id === plantId);

    res.json({

        data: `Modifico la pianta ${plant.nomeComune} con id ${plant.id}`,
    })

}

const destroy = (req, res) => {

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

}


export default { index, show, store, update, destroy };