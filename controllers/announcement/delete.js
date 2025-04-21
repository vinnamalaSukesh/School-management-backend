const { Announcement } = require("../../models");

const Delete = async (req, res) => {
    const { id } = req.body
    const announcement = await Announcement.findByIdAndDelete(id)
    if (!announcement) {
        return res.status(400).json()
    }
    return res.status(200).json()
}
module.exports = { Delete }