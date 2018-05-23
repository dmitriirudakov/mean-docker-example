const db = require('./app.db');

function cleanup(event) {
	console.log(`(!) A system event occurred: ${event}`)
	db.disconnect().finally(() => {
		process.exit();
	});
}

process.on('SIGINT', () => cleanup('SIGINT'));
process.on('SIGTERM', () => cleanup('SIGTERM'));