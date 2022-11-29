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
const criticalRoutes = require("./routes/critical-routes");
const gastroRoutes = require("./routes/gastro-routes");
const gynaecRoutes = require("./routes/gynaec-routes");
const nephroRoutes = require("./routes/nephro-routes");
const neuroRoutes = require("./routes/neuro-routes");
const orthoRoutes = require("./routes/ortho-routes");
const plasticRoutes = require("./routes/plastic-routes");
const spineRoutes = require("./routes/spine-routes");
const uroRoutes = require("./routes/uro-routes");


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
app.use('/api/critical', criticalRoutes);
app.use('/api/gastro', gastroRoutes);
app.use('/api/gynaec', gynaecRoutes);
app.use('/api/nephro', nephroRoutes);
app.use('/api/neuro', neuroRoutes);
app.use('/api/ortho', orthoRoutes);
app.use('/api/plastic', plasticRoutes);
app.use('/api/spine', spineRoutes);
app.use('/api/uro', uroRoutes);

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
        app.listen(3005,() => {
            console.log("Server is open at port 3005");
        })
    })
    .catch((err) => {
        console.log(err);
    })