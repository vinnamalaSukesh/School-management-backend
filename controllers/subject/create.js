const { Subject } = require("../../models");

const Create = async(req,res)=>{
    try{
        const {name} = req.body
        const subject = await new Subject({name}).save()
        if(!subject){
            return res.status(400).json()
        }
        return res.status(200).json({subject})
    }
    catch(err){return res.status(500).json({err})}
}
module.exports = Create