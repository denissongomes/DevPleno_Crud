const findAll = (connection) => {
    connection.query('select * from pessoas', (err, results) => {
        res.send(results)
    })  
}