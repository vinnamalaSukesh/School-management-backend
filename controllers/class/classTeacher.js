const { Section } = require("../../models")

const classTeacher = async (req, res) => {
    try {
        const { sectionId, teacherId } = req.body
        const section = await Section.findByIdAndUpdate(sectionId,{classTeacher : teacherId},{new : true})

        return res.status(200).json({ section })
    }
    catch (err) {
        return res.status(500).json({ err })
    }
}
module.exports = classTeacher