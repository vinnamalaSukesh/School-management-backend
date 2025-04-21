const { Class } = require('../../models')

const Update = async (req, res) => {
    try {
        const { id,name } = req.body
        const updatedClass = await Class.findByIdAndUpdate(id,{ name },{new : true})
        if (!updatedClass) {
            return res.status(400).json()
        }
        return res.status(200).json({ class: updatedClass })
    }
    catch (err) {
        return res.status(500).json({ err })
    }
}
module.exports = Update