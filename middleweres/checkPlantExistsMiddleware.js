import plants from "../data/data.js";

function checkPlantExistsMiddleware(req, res, next) {

    const plantId = req.params.id;

    const index = plants.findIndex((plant) => plant.id === plantId);

    // Se l'indice è -1 

    if (index === -1) {

        // Ritorno errore e mi fermo
        res.status(404);
        res.json({
            error: "Pianta non trovata"
        })

    } else {
        // salvo l'indice come nuova chiave di req
        req.plantIndex = index;
        next();
    }


}

export default checkPlantExistsMiddleware; 