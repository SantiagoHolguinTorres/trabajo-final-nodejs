const User = require("../../models/User")

const user = async()=>{
    const body = {
        firstName: "Elizabeth",
        lastName: "Holguin",
        email: "elizabeth@gmail.com",
        password: "elizabeth123",
        phone: "3685634788"
      }

    await User.create(body)  
}

module.exports = user