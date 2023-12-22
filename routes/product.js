



const express = require('express');
const router = express.Router();
const {getAllProductTesting,getAllProducts} = require("../controllers/product")


router.route("/").get(getAllProducts)
router.route("/testing").all(getAllProductTesting)
module.exports = router