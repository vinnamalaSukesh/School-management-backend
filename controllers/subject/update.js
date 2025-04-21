const { Subject } = require("../../models");

const Update = async (req, res) => {
    try {
        const { id,name } = req.body
        const subject = await Subject.findByIdAndUpdate(id,{ name },{new : true})
        if (!subject) {
            return res.status(400).json()
        }
        return res.status(200).json({ subject })
    }
    catch (err) { return res.status(500).json({ err }) }
}
module.exports = Update