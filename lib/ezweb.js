const express = require("express")
const path = require('path')
const app = express()

module.exports = {
  ezweb: function ezweb(EZWEB_FOLDER, EZWEB_PORT) {

    app.use('/', express.static(path.join(__dirname, EZWEB_FOLDER)))

    app.listen(EZWEB_PORT, () => {
        console.log("ezweb listening on 127.0.0.1:"+EZWEB_PORT)
    })
}};
