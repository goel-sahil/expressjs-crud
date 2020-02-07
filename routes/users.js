const express = require('express');
const router = express.Router();
const UserController = require('../Controllers/UserController');

/* GET users listing. */
router.get('/', function (req, res) {
    UserController.index().then((result) => {
        res.status(result.status).json(result.data);
    });
});

/* Add user */
router.post('/', function (req, res) {
    UserController.store(req.body).then((result) => {
        res.status(result.status).json(result.data);
    });
});

/* Get user */
router.get('/:id', function (req, res) {
    UserController.show(req.params.id).then((result) => {
        res.status(result.status).json(result.data);
    });
});

/* Update user */
router.put('/:id', function (req, res) {
    UserController.update(req.params.id, req.body).then((result) => {
        res.status(result.status).json(result.data);
    });
});

/* Delete user */
router.delete('/:id', function (req, res) {
    UserController.destroy(req.params.id).then((result) => {
        res.status(result.status).json(result.data);
    });
});

module.exports = router;
