import express, {Express, Request, Response} from 'express';
import * as dotenv from 'dotenv';

// configuration the .env file
dotenv.config();

// create Express APP
const app: Express = express();
const port: string | number = process.env.PORT || 8000;

// define first route
app.get('/',(req: Request, res: Response)=>{
    // send hello world
    res.send('welcome App express + Nodemon + TS + Swagger + Mongoose')
});

// define first route
app.get('/hello',(req: Request, res: Response)=>{
    // send hello world
    res.send('Hello world')
});

// execute app and listen request to PORT
app.listen(port, ()=> console.log(`Express server running at http://localhost:${port}`))
