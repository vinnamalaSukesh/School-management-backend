const { Teacher } = require("../../models")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const Login = async (req, res) => {
    try {
        const { email, pwd } = req.body
        console.log(email,pwd)
        const user = await Teacher.findOne({ email })
        if (!user) {
            return res.status(400).json({ message: 'Credentials not match' })
        }
        const match = await bcrypt.compare(pwd, user.pwd)
        if (!match) {
            return res.status(400).json({ message: 'Credentials not match' })
        }
        const token = jwt.sign({ email: email }, process.env.JWT_SECRET, { expiresIn: '1d' })
        if (!token) {
            return res.status(400).json()
        }
        return res.status(200).json({ token, role: 'Teacher' })
    }
    catch (err) {
        console.log(err)
        return res.status(500).json({ err })
    }
}
module.exports = { Login }