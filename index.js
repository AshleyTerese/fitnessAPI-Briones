    const express = require("express");
    const mongoose = require("mongoose");
    const userRoutes = require("./routes/user");
    const itemRoutes = require("./routes/item")
    const workoutRoutes = require('./routes/workout');
    const auth = require('./auth');

    const port = 3000;

    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({extended:true}));
    app.use("/api/users", userRoutes);
    app.use("/api/items", itemRoutes);
    app.use("/api/workouts", workoutRoutes);

    //MongoDB database
    mongoose.connect("mongodb+srv://ashleyterese31:admin123@cluster0.pexor.mongodb.net/fitness-API?retryWrites=true&w=majority&appName=Cluster0");

    mongoose.connection.once('open', () => console.log('Now connected to MongoDB Atlas.'));


    if(require.main === module){
        app.listen(process.env.PORT || port, () => {
            console.log(`API is now online on port ${ process.env.PORT || port }`)
        });
    }

    module.exports = {app,mongoose};