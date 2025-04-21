const { Subject } = require("../../models");

const Delete = async (req, res) => {
    try {
        const { id } = req.body
        const subject = await Subject.findByIdAndDelete(id)
        if (!subject) {
            return res.status(400).json()
        }
        return res.status(200).json()
    }
    catch (err) { return res.status(500).json({ err }) }
}
module.exports = Delete