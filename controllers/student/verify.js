require('dotenv').config()
const jwt = require('jsonwebtoken')
const { Teacher, Class, Section, Student, Announcement, Subject } = require('../../models')
const { toObjectById } = require('../../middlewares/toObject')

const VerifyJWT = async (req, res) => {
    try {
        const { token } = req.body

        jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
            if (err) {
                return res.status(400).json({ message: "Invalid token" })
            }

            const { email } = decoded
            const student = await Student.findOne({ email })
            if (!student) {
                return res.status(400).json({ message: "Student not found" })
            }

            const teachers = toObjectById(await Teacher.find().lean())
            const sectionDoc = await Section.findById(student.section).lean()

            const studentMarks = sectionDoc.subjects.map(subject => {
                const marks = subject.markSheet.find(sub => sub.student.toString() === student._id.toString())
                return {
                    subject: subject.subject,
                    teacher: subject.teacher,
                    marks: marks || null
                }
            })

            const className = await Class.findById(sectionDoc.className)
            const announcements = toObjectById(await Announcement.find().lean())
            const subjects = toObjectById(await Subject.find().lean())

            return res.status(200).json({
                teachers, student, class: className,
                section: {
                    _id: sectionDoc._id,
                    name: sectionDoc.name,
                    className: sectionDoc.className,
                    classTeacher: sectionDoc.classTeacher,
                    studentMarks,
                    attendance: sectionDoc.attendance?.map(entry => {
                        return {
                            date: entry.date,
                            records: entry.records.filter(
                                record => record.student.toString() === student._id.toString()
                            )
                        }
                    }).filter(entry => entry.records.length > 0)
                },
                announcements, subjects
            })
        })
    } catch (err) {
        console.error(err)
        return res.status(500).json({ error: "Internal Server Error" })
    }
}
module.exports = { VerifyJWT }
