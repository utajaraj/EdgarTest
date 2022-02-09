const bodyParser = require("body-parser")
const app = require("express")()
app.use(bodyParser.urlencoded({ extended: true }))

const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  }
});
app.get("/health", (req, res) => {
  res.send(true)
})
app.listen(3306 || process.env.port, () => {
  console.log("Running");
})