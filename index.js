const express = require('express')
const axios = require('axios')
const app = express()

app.get("/", async (req, res) => {
    try {
        const response = await axios.get("http://10.0.0.4:8080/")
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
