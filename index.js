const express = require('express')
const axios = require('axios')
const app = express()

app.get("/", async (req, res) => {
    try {
        const response = await axios.get("168.61.167.58:8080")
        res.json(response.data)
    }
    catch (err) {
        console.log(err)
    }
})

app.get('*', (req, res) => {
    res.status(500).json({ message: "error" })
})

app.listen(8080)
