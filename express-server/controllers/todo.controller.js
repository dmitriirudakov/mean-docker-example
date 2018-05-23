'use strict';

const TodoModel = require('../models/todo.model');

class TodoController {

	/**
	 * Returns a specific model for CRUD
	 * @returns {Object} Specific model
	 */
	getModel() {
		return TodoModel;
	}

	/**
	 * Returns a specific item by id from a collection
	 * @param {string} id 
	 * @returns {Promise} Result of execution
	 */
	get(id) {
		const Model = this.getModel()

		return new Promise((resolve, reject) => {
			Model.findById(id, (error, item) => {
					if (error) {
						console.log(error);
						reject(error);
					} else {
						console.log(item);
						resolve(item);
					}
				}
			);
		})
	}
	/**
	 * Returns all items of a collection
	 * @param {Object} query
	 * @returns {Promise} Result of execution
	 */
	getAll(query) {
		const Model = this.getModel()

		return new Promise((resolve, reject) => {
			Model.find(query, (error, docs) => {
				if (error) {
					console.log(error);
					reject(error);
				} else {
					console.log(docs);
					resolve(docs);
				}
			});
		});
	}
	/**
	 * Updates a specific item by id in a collection
	 * @param {string} id 
	 * @param {Object} body
	 * @returns {Promise} Result of execution
	 */
	update(id, body) {
		const Model = this.getModel()

		return new Promise((resolve, reject) => {
			Model.findByIdAndUpdate(id, body,
				// an option that asks mongoose to return the updated version 
				// of the document instead of the pre-updated one.
				{ new: true },
			
				(error, item) => {
					if (error) {
						console.log(error);
						reject(error);
					} else {
						console.log(item);
						resolve(item);
					}
				}
			)
		})
	}
	/**
	 * Creates an item of a collection
	 * @param {Object} body
	 * @returns {Promise} Result of execution
	 */
	create(body) {
		const Model = this.getModel()
		const doc = new Model(body);

		return new Promise((resolve, reject) => {
			doc.save(function(error, docs) {
				if (error) {
					console.log(error);
					reject(error);
				} else {
					console.log(docs);
					resolve(docs);
				}
			});
		});
	}
	/**
	 * Deletes an item from a collection by id
	 * @param {string} id 
	 * @returns {Promise} Result of execution
	 */
	delete(id) {
		const Model = this.getModel()

		return new Promise((resolve, reject) => {
			Model.findByIdAndRemove(id, (error, item) => {
					if (error) {
						console.log(error);
						reject(error);
					} else {
						console.log(item);
						resolve(item);
					}
				}
			)
		})
	}
}

module.exports = TodoController;