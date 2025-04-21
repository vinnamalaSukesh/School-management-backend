const { Teacher } = require('../../models')

const Delete = async (req, res) => {
    try {
        const { id } = req.body
        const teacher = await Teacher.findByIdAndDelete(id)
        if (!teacher) {
            return res.status(400).json()
        }
        return res.status(200).json({ teacher })
    }
    catch (err) {
        return res.status(500).json({ err })
    }
}
module.exports = Delete