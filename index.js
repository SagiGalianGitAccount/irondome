const express = require('express')
const cors = require('cors')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb')
const app = express()

const corsOptions = {
    origin: 'https://silver-tapioca-1ea94f.netlify.app'
  };
app.use(cors(corsOptions))

const PORT = 3001 || process.env.PORT

const uri = 'mongodb+srv://sagi:sagi@cluster0.k5awmqw.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 })
const collection = client.db("irondome").collection("url")

app.get('/geturl', (req, res) => {
    collection.findOne({
        _id: new ObjectId("6420657b9a1609b599b5916a")
    }).then(result => {
        console.log(result)
        res.send(result)
    }).catch(err => {
        res.send("Could not check for a user !")
    })
})

app.listen(PORT, () => {
    console.log(`[RUNNING] on port: ${PORT}`)
})