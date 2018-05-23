var express = require('express');
var TodoController = require('../controllers/todo.controller');

var router = express.Router();
var controller = new TodoController();

router.get('/', function(req, res) {
	controller.getAll(req.query)
		.then(data => res.send(data))
		.catch(err => res.status(500).send(err));
});

router.get('/:id', function(req, res) {
	controller.get(req.params.id, req.query)
		.then(data => res.send(data))
		.catch(err => res.status(500).send(err));
});

router.post('/', function(req, res) {
	controller.create(req.body)
		.then(data => res.send(data))
		.catch(err => res.status(500).send(err));
});

router.put('/:id', function(req, res) {
	controller.update(req.params.id, req.body)
		.then(data => res.send(data))
		.catch(err => res.status(500).send(err));
});

router.delete('/:id', function(req, res) {
	controller.delete(req.params.id)
		.then(data => res.send(data))
		.catch(err => res.status(500).send(err));
});

module.exports = router;
