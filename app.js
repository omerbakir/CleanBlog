const express = require("express")
const mongoose = require("mongoose")
const path = require("path")
const ejs = require("ejs")
const Post = require("./models/Post")

const app = express()
const port = 3000

mongoose.connect("mongodb://localhost/cleanblog-test-db")

app.set("view engine", "ejs")

app.use(express.static('public'))
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

app.get("/", async (req, res) => {
    const posts = await Post.find({})
    res.render("index", {
        posts
    })
})
app.get("/posts/:id", async (req, res) => {
    const post = await Post.findById(req.params.id)
    res.render("post", {
        post
    })
})
app.get("/about", (req, res) => {
    res.render("about")
})
app.get("/add_post", (req, res) => {
    res.render("add_post")
})
app.get("/post", (req, res) => {
    res.render("post")
})

app.post("/posts", async (req, res) => {
    await Post.create(req.body)
    res.redirect("/")
})

app.listen(port)