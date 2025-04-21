const { MarkSheet } = require("../../models");

const Update = async(req,res)=>{
    try{
        const { id, quarter, half, annual } = req.body
        const markSheet = MarkSheet.findByIdAndUpdate(id,{ quarter, half, annual },{new : true})
        if(!markSheet){
            return res.status(400).json()
        }
        return res.status(200).json({markSheet})
    }
    catch(err){return res.status(500).json({err})}
}

module.exports = Update