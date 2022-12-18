const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express()
const port = process.env.PORT || 3000;

const static_path =path.join(__dirname,"../public");
const templetes_path =path.join(__dirname,"../templetes/views");
const partials_path =path.join(__dirname,"../templetes/partials");
app.set('view engine','hbs');
app.set('views',templetes_path);
hbs.registerPartials(partials_path);

app.use(express.static(static_path));


 app.get("/",(req,res)=>{
     res.render("index")
 })
 app.get("/about",(req,res)=>{
     res.render("about")
 })
 app.get("/weather",(req,res)=>{
     res.render("weather")
 })
 app.get("*",(req,res)=>{
     res.render("error",{
      errorMsg:'Opps! page not found'
     })
 })

app.listen(port,()=>{
    console.log(`port is listion on ${port}`)
})