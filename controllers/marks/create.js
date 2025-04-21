const { Section } = require("../../models")

const Create = async (req, res) => {
    try {
        const { section, subject, data } = req.body
        const updatedSection = await Section.findById(section)
        for (const details of updatedSection.subjects){
            if(details.subject === subject){
                details.markSheet = data
                break
            }
        }
        updatedSection.save()
        if (!updatedSection) {
            return res.status(400).json()
        }
        return res.status(200).json({section : updatedSection})
    }
    catch (err) { return res.status(500).json({ err }) }
}
module.exports = Create