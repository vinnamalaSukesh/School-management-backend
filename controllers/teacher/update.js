const { Teacher } = require('../../models')

const Update = async (req, res) => {
    try {
        const {id, name, phone, email, qualification } = req.body
        const teacher = await Teacher.findByIdAndUpdate(id,{ name, email, phone, qualification },{new : true})
        if (!teacher) {
            return res.status(400).json()
        }
        return res.status(200).json({ teacher })
    }
    catch (err) {return res.status(500).json({err})
    }
}
module.exports = Update