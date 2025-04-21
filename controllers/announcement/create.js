const { Announcement } = require("../../models");

const Create = async(req,res)=>{
    const {text,to} = req.body
    const announcement = await Announcement({ message : text, to}).save()
    if(!announcement){
        return res.status(400).json()
    }
    return res.status(200).json({announcement})
}
module.exports = {Create}