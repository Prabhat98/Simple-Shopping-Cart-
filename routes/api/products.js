const Product = require('../../db').Product// Required product object that we exported in db.js
const route = require('express').Router()

route.get('/',(req,res) =>
{
    // Means when get request comes on this path from shop.js then send products as response
    // We'll get all the products here

    Product.findAll()
        .then((products) =>
        {
            res.status(200).send(products)
        })
        .catch((err) =>
        {
            res.status(500).send(
                {
                    error:"Cannot get products"
                })
        })

})

route.post('/',(req,res) =>
{
    // Validation in case if price is not a number

    if(isNaN(req.body.price))
    {
        return res.status(403).send(
            {
                error:"Price is not a valid number"
            })
    }


    // We'll add new products here

    Product.create(
        {
            name: req.body.name,
            manufacturer:req.body.manufacturer,
            price:parseFloat(req.body.price)
        })
        .then((products) =>
        {
            res.status(201).send(products)
        })
        .catch((err) =>
        {
            res.status(501).send(
                {
                    error:"Could not add products"
                })
        })
 
})

module.exports = route