const findAll = (connection) => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM pessoas', (err, results) => {
            if(err){
                reject(err)
            } else {
                resolve(results)
            }
            
        }) 
    }) 
}

const deleteOne = (connection) => {
    return new Promise((resolve,reject) => {
        connection.query('DELETE FROM pessoas WHERE id='+id), (err, results) => {
            if(err){
                reject(err)
            } else {
                resolve(results)
            }
        }
    })
}

module.exports = {
    findAll, deleteOne
}