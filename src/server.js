import e from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoutes from "./routes/web";
require("dotenv").config();

const app = e();
const PORT=process.env.PORT||9999;

configViewEngine(app);

initWebRoutes(app);



app.listen(PORT, ()=>
{
    console.log(">>> running the port ="+PORT);
})