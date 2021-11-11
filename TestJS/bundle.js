(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
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
},{"fs":1}]},{},[2]);
