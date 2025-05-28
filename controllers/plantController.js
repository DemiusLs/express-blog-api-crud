import plants from "../data/data.js";



const index = (req, res) => {

    // const usiFilter = req.query.usiComuni;
    // const propFilter = req.query.proprietaPrincipali;

    const { usiComuni, proprietaPrincipali } = req.query


    let result = [...plants];

    if (usiComuni !== undefined) {

        result = result.filter((plant) => plant.usiComuni.includes(usiComuni))
    }

    if (proprietaPrincipali !== undefined) {

        result = result.filter((plant) => plant.proprietaPrincipali.includes(proprietaPrincipali))
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

    const newPlant = req.body;
    const lastId = parseInt(plants[plants.length - 1].id);
    newPlant.id = (lastId + 1).toString();
    plants.push(newPlant);

    res.status(201)
    res.send({
        data: newPlant,
    })

}

const update = (req, res) => {

    const updatedPlant = req.body;
    const plantId = req.params.id;
    const plant = plants.find((plant) => plant.id === plantId);

    plant.nomeComune = updatedPlant.nomeComune;
    plant.nomeScientifico = updatedPlant.nomeScientifico,
    plant.immagine =  updatedPlant.immagine,
    plant.proprietaPrincipali = updatedPlant.proprietaPrincipali,
    plant.usiComuni = updatedPlant.usiComuni,



    res.json({

        data: plant,
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