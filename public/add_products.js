$(function()
{
    let productName = $('#product-name')
    let productManufacturer = $('#product-manufacturer')
    let productPrice = $('#product-price')

    $('#btn-Add').click(function()
    {
        // val() returns the value of an input box

        addProducts(
            productName.val(),
            productManufacturer.val(),
            productPrice.val(),
            function(addedProduct)
            {
                window.alert("Added " + addedProduct.name + " to Database")
            }
        )
    })
})