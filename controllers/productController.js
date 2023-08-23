const express = require("express");
const product = express.Router();
const {
    getAllProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct

} = require("../queries/product.js")


//index 
product.get("/", async(req, res) => {
    const allProducts = await getAllProducts();
    if(!allProducts.error){
        res.status(200).json(allProducts);
    } else {
        res.status(500).json({error: "server error"})
    }
});

//show
product.get("/:id", async (req, res) => {
    const {id } = req.params();
    const product = await getProduct(id);
    console.log(product);
    if(!product.error){
        res.status(200).json(product);//no error return data

    }else if(product.error.code === 0){
        res.status(404).json({error: "product not found"})//error code 0 send 404 not found
    }else {
        res.status(500).json({ error : "server error"});//any other error send 500 internal server error
    }
});

//create

product.post("/", (req, res, next) => {
    const {product_name, product_image} = req.body;
    if(!product.name || !product.image){
        return res.status(422).json({error : "body requires product_name, product_image"});
    }
    next()
}, async (req, res)=> {
    const { product_name, product_image} =req.body;

    const newProduct = await createProduct({
        product_name,
        product_image
    });

    if(!newProduct.error){
        res.status(201).json(newProduct);
    }else {res.status(500).json({ error : "server error"})
}
});

//update 
product.put("/:id", async (req, res) => {
    const { id } = req.params;
    const product = req.body;
    const updateProduct = await updateProduct(id, product);
    if(error){
        res.status(500).json({error: " Server error -could not update item"})
    }else{
    res.status(200).json(updateProduct);
    }
});

//delete

product.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deleteProduct = await deleteProduct(id);
    console.log(deleteProduct);
    if(deleteProduct.id){
        res.status(201).json(deleteProduct)
    }else {
        res.status(404).json("product not found")
    }
});
module.exports = product;