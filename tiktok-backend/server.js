import express from 'express'
import mongoose from 'mongoose'

import Data from './data.js'
import Videos from './dbModel.js'

//initialSetting
const app = express()
const port = 9000



//middlewares
app.use(express.json())

app.use((req, res, next) => {
    res.setHeaders('Access-Control-Allow-Origin', '*'),
    res.setHeaders('Access-Control-Allow-Headers', '*'),
    next();
})

//db configs
const conn_url = 'mongodb+srv://EthanHon:Schutzstaffel040!@cluster0.2otvi.mongodb.net/tiktok?retryWrites=true&w=majority'

mongoose.connect(conn_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//api endpoint
app.get('/', (req, res) => {
    res.status(200).send("HelloWorld")
})

app.get('/v1/posts', (req, res) => res.status(200).send(Data))

app.get('/v2/posts', (req, res)=>{
    Videos.find((err, data)=>{
        if(err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})

app.post('/v2/posts', (req, res) => {
    //post request is to add data to the database
    const dbVideos = req.body

    Videos.create(dbVideos, (err, data)=>{
        if(err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})
//listener
app.listen(port, ()=>console.log(`listening on port ${port}`))

