const express = require("express");
const userModel = require("../models/user");
const app = express();

app.post('/signin', async (req, res) => {
    await auth.login(req.body, res)
})

app.post('/signup', async (req, res) => {

    const user = await userModel.findOne({ email: req.body.email })
    if (user) {
        res.status(400).send("Cet utilisateur existe déjà !");
    } else {
        await user.save()
        res.status(200)
    }
})

app.post('/logout', async (req, res) => {
    await auth.logout(req, res)
})

app.put('/user', async (req, res) => {
    await userSwift.updateprofile(req.body, res)
})

app.get("/users", async (request, response) => {
    const users = await userModel.find({});

    try {
        response.send(users);
    } catch (error) {
        response.status(500).send(error);
    }
});

app.get("/users/:id", async (request, response) => {
    let user = await userModel.findById(request.params.id);

    delete user.password

    try {
        response.send(user);
    } catch (error) {
        response.status(500).send(error);
    }
});

app.get("/users/name/:name", async (request, response) => {
    const user = await userModel.findOne({ lastName: request.params.name })

    try {
        response.send(user);
    } catch (error) {
        response.status(500).send(error);
    }
});

app.post("/users", async (request, response) => {
    const user = new userModel(request.body);
    try {
        await user.save();
        response.send(user);
    } catch (error) {
        response.status(500).send(error);
    }
});



module.exports = app;