const fs = require('fs');

var timer
// let data = require('./data.json');
// console.log("data : ", data)
fs.readFile('./data.json', 'utf8', (err, data) => {

    if (err) {
        console.log(`Error reading file from disk: ${err}`)
    } else {

        // parse JSON string to JSON object
        const databases = JSON.parse(data)

        // print all databases
        databases.forEach(db => {
            console.log(`${db.name}: ${db.type}`)
        })
    }

})

const callAPI = () => {
    fileSystem.readFile("./data.json", (err, data) => {
        if (err) {
            console.log("File reading failed", err)
            return
        }
        console.log("File data:", data)
    })
    console.log("call API")
}