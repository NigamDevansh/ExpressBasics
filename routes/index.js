const router = require("express").Router();
// const apiKeyMiddleware = require("../middlewares/apiKey");

// As we have imported the file of middleware and using below require importing method we will
// apply the middleware on all the routes and if we put it in the server file we will then
// to apply this function everywhere i.e. globally (app.use(apiKeyMiddleware)) like this
// router.use(apiKeyMiddleware);

router.get("/", (req, res) => {
  res.render("index", {
    title: "My home page",
  });
});

router.get("/about", (req, res) => {
  res.render("about", {
    title: "My about page",
  });
});

router.get("/download", (req, res) => {
  res.download(path.resolve(__dirname) + "/about.html");
});

// router.get('/api/products', apiKeyMiddleware, (req, res) => {
//     res.json([
//         {
//             id: '123',
//             name: 'Chrome'
//         },
//         {
//             id: '124',
//             name: 'Firefox'
//         }
//     ])
// });

module.exports = router;
