const { Section } = require("../../models")

const addSubject = async (req, res) => {
    try {
        const { subject, section, teacher } = req.body
        const newSection = await Section.findByIdAndUpdate(section,
            {$push:{subjects : {subject : subject,teacher : teacher}}},{new : true})

        if(!newSection){return res.status(400).json()}

        return res.status(200).json({ section: newSection })
    }
    catch (err) {
        return res.status(500).json({ err })
    }
}
module.exports = addSubject