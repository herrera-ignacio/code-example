const { app } = require('./app')
const { PORT } = process.env

app.listen(PORT, () => console.log(`App listening on port ${PORT}`))
