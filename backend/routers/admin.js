const { Router } = require("express");

const con=require("../controllers/admin")

const router = new Router();

router.post('/setCat',con.setCat);
router.get('/getCat',con.getCat);

module.exports = router;