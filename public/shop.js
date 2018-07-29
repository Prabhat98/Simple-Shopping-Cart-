
// fetchProducts function fetches products and argument passed to it is a callback function
// i.e HOF, done is a function itself
// in this function we are requesting for the products 

function fetchProducts(done)
{
    $.get('/api/products', function(data)
    {
        done(data) // done function is called here, i.e function at line 31 runs here
    }) // AJAX
    // Here data is basically all the products that we've fetched
}

function addProducts(name,manu,price,done)
{
    $.post('/api/products',
    {
        name:name,
        manufacturer:manu,
        price:price
    },function(data)
    {
        done(data)
    })
}

// createProduct function will create the entire product card 
// this function takes product object and returns how the product card 
// is going to look like

function createProduct(product)
{
    // jQuery $(``) creates a new element of the format specified within ``

    return $(``)
}

// The following function will be loaded after the page is completely loaded
// i.e the first one to run in this script 

$(function()
{
    let productList = $('#product-list')

    // The function inside fetchProducts is the done function itself

    fetchProducts(function(products)
    {
        productList.empty()// empty() clears the content of HTML element
        for(product of products)
        {
            productList.append(createProduct(product))
        }
    })
})

/* Working of this script */

/*
in function fetchProducts get request is sent on the path '/api/products' which is a js file
running on the backend. This file handles the get request as configured and sends products back
to it as a response (line number 12 in product.js) which further fetches data from database.
the requested data as response is stored in 'data' of the callback function, also this 
data is sent as the argument of the done function (which is in line 48). So the products 
parameter in the done function is the data itself that was requested on GET method   
The get request returns us an array of objects (each being a JSON object), this array is 
the list of products sent in the form of JSON objects.
*/