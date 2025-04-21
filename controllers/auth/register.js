const bcrypt = require('bcryptjs')
const {Admin} = require('../../models')

const Register = async(req,res)=>{
    try{
        const {uname,email,pwd} = req.body
        const salt = await bcrypt.genSalt(10)
        const hashedPwd = await bcrypt.hash(pwd,salt)
        const user = await new Admin({uname,email,pwd : hashedPwd}).save()
        if(!user){
            return res.status(400).json()
        }
        return res.status(200).json()
    }
    catch(err){res.status(500).json({err:err})
    }
}
module.exports = {Register}