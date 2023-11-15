import courseRouter from './course-route.js';

export default (app) => {
    app.use('/courses', courseRouter);
    // app.use('/instructor', );
}