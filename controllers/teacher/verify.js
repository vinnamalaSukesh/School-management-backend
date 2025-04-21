const { toObjectById } = require('../../middlewares/toObject')
const { Teacher, Section, Class, Announcement, Student, Subject } = require('../../models')
const jwt = require('jsonwebtoken')

const Verify = async (req, res) => {
    try {
        const { token } = req.body
        jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
            if (err) {return res.status(400).json()}

            const { email } = decoded
            const teacher = await Teacher.findOne({ email })
            if (!teacher) {
                return res.status(400).json()
            }
            const classes = toObjectById(await Class.find())
            const sections = await Section.find().lean()
            const sortedSections = []
            let classTeacherFor = null
            for (const section of sections){
                if (section.classTeacher && section.classTeacher.toString() === teacher._id.toString()) {
                    classTeacherFor = section;
                }
                for(const subTeacher of section.subjects){
                    if (subTeacher.teacher && subTeacher.teacher.toString() === teacher._id.toString()){
                        sortedSections.push({section : section._id, subject : subTeacher.subject, students : section.students})
                    }
                }
            }
            const announcements = toObjectById(await Announcement.find())
            const students = toObjectById(await Student.find())
            const subjects = toObjectById(await Subject.find())
            const sectionObjs = toObjectById(sections)
            return res.status(200).json({ teacher, classTeacherFor, sections : sectionObjs, assignedSubjects : sortedSections, classes, announcements, students, subjects })
        })
    }
    catch (err) {
        return res.status(500).json({err})
    }
}
module.exports = Verify