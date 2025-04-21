const { Admin } = require("../../models")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const Login = async(req,res)=>{
    try{
        const {email,pwd} = req.body
        const user = await Admin.findOne({email})
        if(!user){
            return res.status(400).json({message:'Credentials not match'})
        }
        const match = await bcrypt.compare(pwd,user.pwd)
        if(!match){
            return res.status(400).json({ message: 'Credentials not match' })
        }
        const token = jwt.sign({ email: email }, process.env.JWT_SECRET, { expiresIn: '1d' })
        if(!token){
            return res.status(400).json()
        }
        return res.status(200).json({token,role:'Admin'})
    }
    catch(err){
        return res.status(500).json({err})
    }
}
module.exports = {Login}