import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

import "dotenv/config";

const app=express();
const port=3000; 

const apiKey = process.env.API_KEY;

app.use(express.static("public")); 
app.use(bodyParser.urlencoded({extended:true}));
   
if(!apiKey){
    console.error("Error! API KEY is not found");
    process.exit(1); // will say to stop processing
} 
const API_URL=`https://v6.exchangerate-api.com/v6/${apiKey}`;
let codes;

app.get("/",async(req,res)=>{
    try{ 
        const response=await axios.get(API_URL+"/codes");
        codes=response.data.supported_codes;
        res.render("index.ejs",{codes:codes});
    }
    catch(error){   
       console.log(error.response.error-type);  
    }
        
});          
app.post("/submit", async (req,res)=>{
    const base=req.body.base;
    const target=req.body.target; 
    const amount=req.body.amount;  
    try{   
        const response=await axios.get(API_URL+`/pair/${base}/${target}/${amount}`);
        console.log(response.data.conversion_result);
        res.render("index.ejs",{  
            codes:codes, 
            base:base,
            target:target,
             rate: response.data.conversion_rate,
             result: Number(response.data.conversion_result.toFixed(2)).toLocaleString()
        });
 
    } 
    catch(error){
       console.log(error.response.message);
    }
});
  
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})