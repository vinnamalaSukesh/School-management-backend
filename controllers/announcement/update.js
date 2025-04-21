const { Announcement } = require("../../models");

const Update = async (req, res) => {
    const { id, text, to } = req.body
    const announcement = await Announcement.findByIdAndUpdate(id,{ message: text, to },{new:true})
    if (!announcement) {
        return res.status(400).json()
    }
    return res.status(200).json({ announcement })
}
module.exports = { Update }