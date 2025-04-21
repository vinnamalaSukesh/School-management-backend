const { Section } = require("../../models")

const subTeacher = async(req,res)=>{
    try{
        const { subject, sectionId, teacherId } = req.body
        const section = await Section.findById(sectionId)
        section.subjects = section.subjects.map((subjectTeacher) => {
            if (
                subjectTeacher.subject === subject ||
                subjectTeacher.subject.toString() === subject.toString()
            ) {
                return {
                    ...subjectTeacher,
                    teacher: teacherId,
                };
            }
            return subjectTeacher;
        });
        await section.save()
        const updatedSection = await Section.findById(sectionId)
        return res.status(200).json({section:updatedSection})
    }
    catch(err){
        return res.status(500).json({err})
    }
}
module.exports = subTeacher