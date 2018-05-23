const mongoose = require('mongoose');

const DB_NAME = 'mean-docker-example';

// MongoDB URL from the docker-compose file
const DB_HOST = 'database:27017';

// MongoDB URL for local testing
// const DB_HOST = 'localhost:27017';

const CONNECTION_STRING = `mongodb://${DB_HOST}/${DB_NAME}`;

class Datebase {

	connect(connectionString = CONNECTION_STRING) {
		this.connectionString = connectionString;
		return new Promise((resolve, reject) => {
			mongoose.connect(this.connectionString).then(() => {
				console.log(`Succesfully connected to: ${this.connectionString}`);
				resolve();
			}).catch(() => {
				console.log(`An error occured while connecting to: ${this.connectionString}`);
				reject();
			});
		})
	}

	disconnect() {
		const connection = mongoose.connection;
		return new Promise((resolve, reject) => {
			connection.close().then(() => {
				console.log(`Succesfully disconnected from: ${this.connectionString}`);
				resolve();
			}).catch(() => {
				console.log(`An error occured while disconnecting from: ${this.connectionString}`);
				reject();
			});
		})
	}
}

const instance = new Datebase();

module.exports = instance;