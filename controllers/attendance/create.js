const { Section } = require("../../models")

const Create = async (req, res) => {
    try {
        const { section: sectionId, attendance, today } = req.body;

        const updatedSection = await Section.findById(sectionId);

        if (!updatedSection) {
            return res.status(400).json({ error: "Section not found" });
        }

        const formattedDate = new Date(today)

        let attendanceEntry = updatedSection.attendance.find(entry =>
            new Date(entry.date).toDateString() === formattedDate.toDateString()
        )
        const records = Object.entries(attendance).map(([studentId, status]) => ({
            student: studentId,
            status
        }))

        if (attendanceEntry) {
            attendanceEntry.records = records;
        } else {
            updatedSection.attendance.push({
                date: formattedDate,
                records
            });
        }
        await updatedSection.save();

        return res.status(200).json({ section: updatedSection });
    }
    catch (err) { return res.status(500).json({ err }) }
}
module.exports = Create