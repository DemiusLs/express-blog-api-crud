function errorHandler(error, req, res, next) {

    console.log("errore", error);
    res.status(500);
    res.json({
        error: "Errore interno del server"
    })
}

export default errorHandler ;