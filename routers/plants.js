import express from "express"
import plantController from "../controllers/plantController.js";
import checkPlantExistsMiddleware from "../middleweres/checkPlantExistsMiddleware.js";



const router = express.Router();

//INDEX
// lettura di tutti gli elementi 
router.get("/", plantController.index)


//SHOW 
//lettura di un elemento singolo
router.get("/:id", checkPlantExistsMiddleware, plantController.show)


//STORE
//inserisco un nuovo elemento
router.post('/', plantController.store)


//UPDATE
//modifico un elemento
router.put("/:id", checkPlantExistsMiddleware, plantController.update)


//DELETE
//elimino un elemento
router.delete("/:id", checkPlantExistsMiddleware, plantController.destroy)


export default router;