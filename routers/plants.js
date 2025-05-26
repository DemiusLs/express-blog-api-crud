import express from "express"
import plantController from "../controllers/plantController.js";



const router = express.Router();

//INDEX
// lettura di tutti gli elementi 
router.get("/", plantController.index )


//SHOW 
//lettura di un elemento singolo
router.get("/:id", plantController.show  )


//STORE
//inserisco un nuovo elemento
router.post('/', plantController.store )


//UPDATE
//modifico un elemento
router.put("/:id", plantController.update )


//DELETE
//elimino un elemento
router.delete("/:id",  plantController.destroy)


export default router;