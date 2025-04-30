const { Router } = require('express');
const router = Router();
router.get('/', (req, res) => res.send('GET /'));
router.post('/', (req, res) => res.send('POST /'));
router.delete('/', (req, res) => res.send('DELETE /'));
router.put('/', (req, res) => res.send('PUT /'));
router.patch('/', (req, res) => res.send('PATCH /'));
module.exports = router;
