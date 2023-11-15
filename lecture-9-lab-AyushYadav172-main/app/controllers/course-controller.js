import { request, response } from 'express';
import * as courseServices from '../services/course-service.js';
import { setResponse, setErrorResponse } from './response-handler.js';

export const find = async (request, response) => {
    try {
        const params = {...request.query};
        const courses = await courseServices.search(params);
        setResponse(courses, response);
    } catch (err) {
        setErrorResponse(err, response);
    }
}

export const post = async (request, response) => {
    try {
        const newCourse = {...request.body}
        const course = await courseServices.save(newCourse);
        setResponse(courses, response);
    } catch (err) {
            setErrorResponse(err, response)  
    }
}


export const get = async (request, response) => {
    try {
        const id = request.param.id;
        const course = await courseServices.findById(id);
        setResponse(course, response);
    } catch (err) {
        setErrorResponse(err, response);
    }
}

export const put = async (request, response) => {
    try {
        const id = request.param.id;
        const updatedCourse = {...request.body};
        const course = await courseServices.update(updatedCourse. id);
        setResponse(course, response);
    } catch (err) {
        setErrorResponse(err, response);        
    }
}

export const remove = async (request, response) => {
    try {
        const id = request.params.id;
        const course = await courseServices.remove(id);
        setResponse({}, response);
    } catch (err) {
        setErrorResponse(err, response);        
    }
}