const express = require("express");
const path = require("path");
const app = express();
const mainRouter = require("./routes/index");
const productRouter = require("./routes/products");

const PORT = process.env.PORT || 3000;
app.set("view engine", "ejs");

// console.log(app.get("view engine"));
// console.log(app.get("views"));
app.use(express.static("public"));
app.use(express.json());

// app.use(express.urlencoded({extended: false}));
app.use(productRouter);

app.use(mainRouter);


// middleware.
app.use((req, res, next) => {
  return res.json({ message: "page not found" });
});

// express error handling middleware.
app.use((err,req,res,next)=>{
    console.log('Error: ', err.message)


})

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
