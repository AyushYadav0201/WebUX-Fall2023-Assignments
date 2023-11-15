import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    instructor: {
        type: String,
        required: true
    },
    location: {
        room: {
            type: String,
            required: true
        },
        building: {
            type: String,
            required: true
        }
    },
    schedule:{
        startTime: {
            type: String,
            required: true
        },
        endTime: {
            type: String
        }
    }
},
// {
//     versionKey: false
// }
);

const CourseModel = mongoose.model('course', CourseSchema);

export default CourseModel;