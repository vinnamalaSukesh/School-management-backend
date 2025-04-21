const { Student,Section } = require('../../models')
const bcrypt = require('bcryptjs')

const Create = async (req, res) => {
    try {
        const { name, phone, email, pwd, section } = req.body
        const salt = await bcrypt.genSalt(10)
        const hashedPwd = await bcrypt.hash(pwd,salt)
        const student = await new Student({ uname: name, email, phone, pwd : hashedPwd, section : section._id }).save()
        if (!student) {
            return res.status(400).json()
        }
        const updatedSection =  await Section.findByIdAndUpdate(section,{$push:{students : student._id}},{new : true})
        return res.status(200).json({ student,section : updatedSection })
    }
    catch (err) {return res.status(500).json({err})}
}
module.exports = Create