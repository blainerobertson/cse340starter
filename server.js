const { Client } = require("pg")
const express = require("express")
const env = require('dotenv').config()
const app = express()
// Set up "public" folder / subfolders for static files
app.use(express.static("public"))
app.use('/css', express.static(__dirname + 'public/css'))
app.use("/js", express.static(__dirname + "public/js"))
app.use("/images", express.static(__dirname + "public/images"))
// Declare local ports
// Values from environment file or local values
// Environment vars will be used when deploying
const port = process.env.PORT || 5500 // Node port
const host = process.env.HOST || 'localhost' // Node host


// connection to Postgres DB in container
const client = new Client({
  password: "postgres",
  user: "postgres",
  host: "postgres",
  database: "penmotors",
})

//  greet function to test initial operation
app.get("/greet", async (req, res) => {
  const results = await client
    .query("SELECT * FROM welcome")
    .then((payload) => {
      return payload.rows
    })
    .catch(() => {
      throw new Error("Query failed")
    })
  res.setHeader("Content-Type", "application/json")
  res.status(200)
  res.send(JSON.stringify(results))
});

(async () => {
  client.connect()
  app.listen(port, () => {
    console.log(`app listening on ${host}:${port}`)
  })
})()
