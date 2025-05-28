import plants from "../data/data.js";

function plantAlreayExists(req, res, next) {

    const newPlant = req.body
    let plant = plants.find((plant) => plant.nomeComune === newPlant.nomeComune)

    if (plant) {

        res.status(400);
        res.json({
            error: "Pianta già esistente"
        })
    } else {

        next()
    }


}

export default plantAlreayExists;