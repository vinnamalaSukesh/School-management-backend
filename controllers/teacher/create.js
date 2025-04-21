const { Teacher } = require('../../models')
const bcrypt = require('bcryptjs')

const Create = async(req,res)=>{
    try{
        const {name,phone,email,pwd,qualification} = req.body
        const salt = await bcrypt.genSalt(10)
        const hashedPwd = await bcrypt.hash(pwd,salt)
        const teacher = await new Teacher({name,email,phone,pwd : hashedPwd,qualification}).save()
        if(!teacher){
            return res.status(400).json()
        }
        return res.status(200).json({teacher})
    }
    catch(err){console.log(err)
        return res.status(500).json()}
}
module.exports = Create