const express = require("express")
const app = express()

const port = 5000

app.get("/", (req, res) => {
    res.send("Hello there");
})

app.get("/test", (req, res) => {
    res.send("<H1>This is Chai now</H1>")
})

app.listen(port, () => {
    console.log(`app running on port ${port}`)
})