const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

const homeRoutes = require("./routes/home-routes");
const aboutRoutes = require("./routes/about-routes");
const expertiseRoutes = require("./routes/expertise-routes");
const serviceRoutes = require("./routes/service-routes");
const departmentOverviewRoutes = require("./routes/departmentOverview-routes");
const departmentRoutes = require("./routes/department-routes");
const doctorRoutes = require("./routes/doctor-routes");
const contactRoutes = require("./routes/contact-routes");

const HttpError = require("./util/http-error");

app.use(bodyParser.json());

app.use((req,res,next) => {
    // Header used to patch the backend with Frontend
    // It will allow the access form any browser NOT ONLY localhost:3000
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods','GET, POST, PATCH, DELETE');
    next();
});

app.use('/api/home',homeRoutes);
app.use('/api/about',aboutRoutes);
app.use('/api/expertise',expertiseRoutes);
app.use('/api/service', serviceRoutes);
app.use('/api/departmentOverview', departmentOverviewRoutes);
app.use('/api/department', departmentRoutes);
app.use('/api/doctor', doctorRoutes);
app.use('/api/contact', contactRoutes);

app.use((req,res,next) => {
    const error = new HttpError('Could not find the route!',404);
    next(error);
})

app.use((error,req,res,next) => {
    // If the response is already given
    if(res.headerSent){
        return next(error);
    }
    res.status(error.code || 500)
    res.json({message:error.message || 'An unknown error found!'});
})

mongoose
    .connect("mongodb+srv://anigma:anigma@cluster0.30vv9v0.mongodb.net/test",{ useNewUrlParser: true,useUnifiedTopology: true  })
    .then(() => {
        app.listen(process.env.PORT || 5000,() => {
            console.log("Server is open at port 3005");
        })
    })
    .catch((err) => {
        console.log(err);
    })