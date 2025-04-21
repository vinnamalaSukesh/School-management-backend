const { Student } = require('../../models')

const Update = async (req, res) => {
    try {
        const { id,name, phone, email } = req.body
        const student = await Student.findByIdAndUpdate(id,{ uname : name, email, phone },{new : true})
        if (!student) {
            return res.status(400).json()
        }
        return res.status(200).json({ student })
    }
    catch (err) {
        return res.status(500).json({ err })
    }
}
module.exports = Update