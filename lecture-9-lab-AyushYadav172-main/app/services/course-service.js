import Course from '../models/course.js';

export const search = async (params = {}) => {
    const courses = Course.find(params).exec();
    return courses;
}

export const save = async (newCourse) => {
    const course = new Course(newCourse);
    return await course.save();
}

export const findById = async (id) => {
    const course = await Course.findById(id).exec();
    return course;
}

export const update = async (updatedCourse, id) => {
    const course = await Course.findByIdAndUpdate(id, updateCourse).exec();
    return course;
}

export const remove = async (id) => {
    return await Course.findByIdAndRemove(id).exec();
}