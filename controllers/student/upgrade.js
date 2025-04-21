const { Student, Section } = require('../../models')

const Upgrade = async (req, res) => {
    try {
        const { id, name, phone, email, sect } = req.body
        const student = await Student.findById(id)

        const updatedStudent = await Student.findByIdAndUpdate(id, {uname : name, email, phone, section : sect },{new:true})
        if (!updatedStudent) {
            return res.status(400).json()
        }
        const section1 = await Section.findByIdAndUpdate(student.section,{$pull:{students : student._id}},{new : true})
        const section2 = await Section.findByIdAndUpdate(sect,{ $push: { students: student._id } }, { new: true })
        return res.status(200).json({ student : updatedStudent,section1,section2})
    }
    catch (err) {
        return res.status(500).json({ err })
    }
}
module.exports = Upgrade