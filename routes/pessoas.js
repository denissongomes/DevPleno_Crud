const express = require('express')

const pessoasRouter = () => {
    const router = express.Router()
    router.get('/', (req, res) => {
        res.send('Pessoas')
    })
    return router
}

module.exports = pessoasRouter