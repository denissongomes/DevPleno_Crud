const index = (connection, req, res) => {
    connection.query('select * from pessoas', (err, results) => {
        res.send(results)
    })  
}

module.export = {
    index
}