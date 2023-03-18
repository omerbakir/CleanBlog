const express = require("express")
const mongoose = require("mongoose")
const path = require("path")
const ejs = require("ejs")
const methodOverride = require('method-override')
const Post = require("./models/Post")
const pageControllers = require("./controllers/pageControllers")
const postControllers = require("./controllers/postControllers")

const app = express()
const port = 3000

mongoose.connect("mongodb://localhost/cleanblog-test-db")

app.set("view engine", "ejs")

app.use(express.static('public'))
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())
app.use(methodOverride('_method', {
    methods: ["POST", "GET"]
}))

app.get("/", postControllers.getAllPosts)
app.get("/about", pageControllers.aboutPage)
app.get("/add_post", pageControllers.addPage)
app.get("/posts/edit/:id", pageControllers.editPage)
app.get("/posts/:id", postControllers.getPost)
app.post("/posts", postControllers.createPost)
app.put("/posts/:id", postControllers.updatePost)
app.delete('/posts/:id', postControllers.deletePost);
app.listen(port)
