import express from 'express'
import mongoose from 'mongoose'
import postsRouter from "./routers/posts-router.js";
import fileUpload from "express-fileupload";

const PORT = 9800;
const DB_URL = `mongodb+srv://TrezorTop:TrezorTop@cluster0.zdqxk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

const app = express()

app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({}))
app.use('/api', postsRouter)

async function startApp() {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => {
            console.log("SERVER STARTED ON PORT", PORT)
        })
    } catch (error) {
        console.log(error)
    }
}

startApp()
