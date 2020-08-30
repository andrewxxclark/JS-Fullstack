const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => res.json({"Text": "Hello world"}));

module.exports = router;

