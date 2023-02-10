const express = require("express")
const path = require('path')
const app = express()

module.exports = {
  nopain: function nopain(NOPAIN_FOLDER, NOPAIN_PORT) {

    app.use('/', express.static(path.join(__dirname, NOPAIN_FOLDER)))

    app.listen(NOPAIN_PORT, () => {
        console.log("nopain listening on 127.0.0.1:"+NOPAIN_PORT)
    })
}};
