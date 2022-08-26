const express = require("express");
const cors = require("cors");
const { faCarCrash } = require("@fortawesome/free-solid-svg-icons");
const stripe = require("stripe")("sk_test_51LXVk2JCZIwZn5xOSzciXS0QD2DxU90cOzAu9XWCRW26EI3Vmlfhf6ut4Z8VPZi7r32F6e3e0J5oEIUyZGM10ktG00sFM33ROt");
const { v4: uuidv4 } = require('uuid');
const idempotencyKey =Math();
const app= express();
app.use(cors());
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("Welcome into our shopping website");
    
});
app.post("/checkout",async (req,res)=>{
 let error;
 let status;
 try{
const {product,token }= req.body;
const customer = await stripe.customers.create({
   email:token.email,
   source: token.id 
})
const key = uuidv4();
const charge = await stripe.charges.create({
 amount:product.price*100,  
 currency:usd,
 customer:customer.id,
 receipt_email:token.email,
 description:  'all products description' ,
 shipping: {
    name: token.card.name,
    address:{
        line1:token.card.address_linne1,
        line2:token.card.address_line2,
        city:token.card.address_city,
        country: token.card.addredd_country,
        postal_code: token.card.address_zip
    }
 }
},
    {idempotencyKey: key})
    status = "success";
 }
 catch(error){
   console.log(error) ;
   status = "error" 
 }
 res.json({status});
 })

app.listen(8080,()=>{
    console.log("your app is running on port number 8080 ");
})
