import express from "express";
import connectDb from "./config/db.js";
 
import userRoute from "./router/userRoutes.js";
 
const app = express();
 
connectDb();

app.listen(5000, () => {
  console.log("Server is Running", 5000);
});

app.use(express.json());
 

// parse request data content type application/json

 app.use("/api/user", userRoute); 
 