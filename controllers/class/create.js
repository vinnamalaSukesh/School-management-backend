const { toObjectById } = require('../../middlewares/toObject')
const { Class,Section } = require('../../models')

const Create = async (req, res) => {
    try {
        const { name, sections } = req.body
        const newClass = await new Class({ name }).save()

        const formattedSections = sections.map(section => {
            const subjectsArray = Object.entries(section.subjects).map(
                ([subject, teacher]) => ({subject,teacher}))
            return {
                className : newClass._id,
                name: section.name,
                classTeacher: section.classTeacher || null,
                subjects: subjectsArray
            };
        });
        const newSections = await Section.insertMany(formattedSections)
        const plainSections = await Section.find({ _id: { $in: newSections.map(s => s._id) } }).lean()

        if(!plainSections){
            return res.status(400)
        }
        const sectionIds = plainSections.map(section => section._id )
        if(!newClass){
            return res.status(400).json()
        }
        const updatedClass = await Class.findByIdAndUpdate(newClass._id,{sections : sectionIds},{new : true})
        const sectionsMap = toObjectById(plainSections)
        console.log(sectionsMap)
        return res.status(200).json({class : updatedClass,sections : sectionsMap})
    } catch (err) {
        return res.status(500).json({ err })
    }
}
module.exports = Create
