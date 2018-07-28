const User = require('../../db').User//Required User object that we exported in db.js
const route = require('express').Router()

route.get('/',(req,res) => 
{
    // We'll send an array of users from here

    User.findAll()
        .then((users) => 
        {
            res.status(200).send(users)
        })
        .catch((err) =>
        {
            res.status(500).send(
                {
                    error:"Could not get users"
                })
        })

})

route.post('/',(req,res) =>
{
    // Here we'll be creating a new user on request

    User.create(
        {
            name: req.body.name
        })
            .then((user) =>
            {
               res.status(201).send(user) 
            })
            .catch((err) =>
            {
                res.status(501).send(
                    {
                        error:"Could not add new user"
                    })
            })
        
})

// Exported route as a function, not as an object. Therefore not used {}

module.exports = route

