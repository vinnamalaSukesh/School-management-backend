require('dotenv').config()
const jwt = require('jsonwebtoken')
const { Admin, Teacher, Class, Section, Student, Announcement, Subject } = require('../../models')
const { toObjectById } = require('../../middlewares/toObject')

const VerifyJWT = async(req,res)=>{
    try{
        const {token} = req.body
        jwt.verify(token,process.env.JWT_SECRET,async(err,decoded)=>{
            if(err){
                return res.status(400).json()
            }
            const {email} = decoded
            const admin = await Admin.findOne({email})
            if(!admin){
                return res.status(400).json()
            }
            const teachers = toObjectById(await Teacher.find().lean())
            const students = toObjectById(await Student.find().lean())
            const classes = toObjectById(await Class.find().lean())
            const sections = toObjectById(await Section.find().lean())
            const announcements = toObjectById(await Announcement.find().lean())
            const subjects = toObjectById(await Subject.find().lean())

            return res.status(200).json({admin,teachers,students,classes,sections,announcements,subjects})
        })
    }
    catch(err){return res.status(500).json({err})}
}
module.exports = {VerifyJWT}