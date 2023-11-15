import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import registerRouter from './routes/index.js';
import models from './models/index.js';

const initialize = (app) => {

    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded());
    mongoose.connect('mongodb+srv://yadav127:ayush127@yadav127.pp2hxbl.mongodb.net/coursedb?retryWrites=true&w=majority');
    registerRouter(app);

}

export default initialize;