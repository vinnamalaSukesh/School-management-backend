const { Student, Section } = require('../../models')

const Delete = async (req, res) => {
    try {
        const { id, section } = req.body
        console.log(id,section)
        const student = await Student.findByIdAndDelete(id)
        if (!student) {
            return res.status(400).json()
        }
        const updatedSection = await Section.findByIdAndUpdate(section,{$pull:{students:id}},{new : true})
        return res.status(200).json({section : updatedSection})
    }
    catch (err) {
        return res.status(500).json({ err })
    }
}
module.exports = Delete