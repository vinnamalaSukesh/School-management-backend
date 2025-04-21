const mongoose = require('mongoose')

const admin = new mongoose.Schema({
    uname : {type : String,required : true},
    email : {type : String,required : true,unique : true},
    pwd : {type : String,required : true},
})
const teacher = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone : {type : String,required : true},
    pwd: { type: String, required: true },
    qualification : {type : String,required : true}
})
const student = new mongoose.Schema({
    uname : {type : String, required : true},
    phone : {type : String, required : true},
    email : {type : String, required : true},
    pwd : {type : String, required : true},
    section : {type : mongoose.Schema.Types.ObjectId,ref : 'Section'}
})
const marks = new mongoose.Schema({
    student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
    quarter: { type: Number },
    half: { type: Number },
    annual: { type: Number }
})
const section = new mongoose.Schema({
    className: { type: mongoose.Schema.Types.ObjectId, ref: 'Class'},
    name: { type: String, required: true },
    subjects: [{
        subject: { type: String, required: true },
        teacher: { type: String, required: String, default: null },
        markSheet : [marks]
    }],
    classTeacher: { type: mongoose.Schema.Types.ObjectId, ref: 'Teacher' },
    students : [{type : mongoose.Schema.Types.ObjectId,ref : 'Student'}],
    attendance : [{
        date: { type: Date },
        records: [{
            student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
            status: { type: String, enum: ['P', 'A', 'N/A'] }
        }]
    }]
})
const classes = new mongoose.Schema({
    name : {type : String, required : true},
    sections: [{ type: mongoose.Schema.Types.ObjectId, ref : 'Section'}]
})
const announcements = new mongoose.Schema({
    message : {type : String,required : true},
    to : {type : String, enum : ['All','Teachers','Students']}
})
const subject = new mongoose.Schema({
    name : {type : String, required : true}
})

const Subject = mongoose.model('Subject',subject)
const Student = mongoose.model('Student',student)
const Admin = mongoose.model('Admin', admin)
const Teacher = mongoose.model('Teacher',teacher)
const Class = mongoose.model('Class',classes)
const Announcement = mongoose.model('announcements',announcements)
const Section = mongoose.model('sections',section)

module.exports = {Admin,Teacher,Student,Class,Announcement,Section,Subject}