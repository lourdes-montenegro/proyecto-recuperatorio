const express = require('express');
const path = require('path')
const app = express()

const publicPath = path.resolve(__dirname, './public')

    app.use(express.static(publicPath));

const port = 4000

app.listen(port, () => {
    console.log('servidor corriendo')
})
    ;
app.get('/', (req, res) => {
    let htmlPath = path.resolve(__dirname, './views/home.html')
    res.sendFile(htmlPath) 

})
