// require('dotenv').config({path: './.env'});
import express from "express";
import { app } from "./app.js";

import dotenv from "dotenv";
import connectDB from "./db/index.js";


dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
  });











/* 
( async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
    app.on("error", (error) => {
        console.log("ERROR: ", error);
        throw error;
    })

    app.listen(process.env.PORT, () => {
        console.log(`App is listening on port ${process.env.PORT}`);
    } )
  } catch (error) {
    console.log("ERROR: ", error);
    throw err;
  }
})();
*/
