import product from "../model/product.js";



const getProductsController = async (req,res) =>{
try{
const products =  await product.find();
res.json(products);



}catch(error){
    res.status(500).json({message: "Error fetching products"});
    
}




};
const saveProductController = async (req,res) => {
try{




    const newProductFields = req.body;
    const newProduct  = new product(newProductFields);
    await  newProduct.save();
    res.status(201).json(newProduct);


}catch(error){

res.status(500).json({message: "Error saving products"});


}




};
export {
     getProductsController,
     saveProductController,
}