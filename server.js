// Those ejs files are like cheap version of react and views are the main pages of the routing
// and partials are the variables
const express = require("express");
// Used to fine the path of the current directory the folder is in
const path = require("path");
const app = express();
// This is used getting all the routes at one place to remove the cluttering of the get, put, delete etc
// over the single sever.js page
const mainRouter = require("./routes/index");
const productRouter = require("./routes/products");
const ErrorHandler = require("./errors/ErrorHandler");
const PORT = 3000;
//Getting the ejs files from the views folder is not done in below .set rather it just tells the
// express that ejs is used (sortoff)
app.set("view engine", "ejs");
//It is used for getting the static files from the public folder its the convention of it
app.use(express.static("public"));
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(productRouter);
// This is how you use the imported files
app.use(mainRouter);
app.use((req, res, next) => {
  return res.json({ message: "page not found!" });
});

app.use((err, req, res, next) => {
  if (err instanceof ErrorHandler) {
    res.status(err.status).json({
      error: {
        message: err.message,
        status: err.status,
      },
    });
  } else {
    res.status(500).json({
      error: {
        message: err.message,
        status: err.status,
      },
    });
  }
});
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
