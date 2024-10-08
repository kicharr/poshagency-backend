// @ts-ignore
import express, {Express} from "express";
// @ts-ignore
import bodyParser from "body-parser";
import {DependencyContainer} from "./middleware/DependencyContainer";

const port: number = 3000;

const app: Express = express();

new DependencyContainer();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.listen(port, () => {
    console.log(`Server started at port: ${port}, http://localhost:${port}`)
})
