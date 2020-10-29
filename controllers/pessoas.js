const pessoas = require('../models/pessoas')

const index = async(connection, req, res) => {
  const results = await pessoas.findAll(connection)
  res.render('pessoas/index', { pessoas: results })
}

const deleteRow = async(connection, req, res) => {
  await pessoas.deleteRow(connection, req.params.id)
  res.redirect('/pessoas')
}


module.exports = {
    index,
    deleteRow
}