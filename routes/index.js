var express = require("express");
var router = express.Router();
var consulta = require("../controllers/ConsultaController.js");
/* GET home page. */
router.get("/", consulta.index);
router.get("/view/:id",consulta.view);
router.post("/consulta",consulta.list);
module.exports = router;
