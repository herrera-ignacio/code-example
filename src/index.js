const { app } = require('./app')
const { db } = require('./frameworks/db')
const { PORT } = process.env

const start = async (retry = true) => {
	try {
		console.log('Connecting to Database...')
		await db.client.authenticate()
		await db.client.sync()
		app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
	} catch (err) {
		console.error(`Error: ${err.message}`, err)
		if (retry) {
			console.log('Retrying connection to database in 5 seconds...')
			setTimeout(async () => start(), 5000)
		}
	}
}

start()
