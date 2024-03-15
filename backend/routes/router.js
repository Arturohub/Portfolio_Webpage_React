const express = require("express")
const router = express.Router()
const schemas = require("../models/schemas")
const nodemailer = require("nodemailer")

router.post("https://arturochicavilla.onrender.com/contact", async(req, res) => {
    const {name, email, message} = req.body

    const newContact = new schemas.Contact({name: name, email: email, message: message})
    const saveContact = await newContact.save()
    if (saveContact) {

        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            }
        })
        

        let emailOptions = {
            from: "Mr Robot",
            to: "arturoportfoliofullstack@gmail.com",
            text: `New contact submission from ${name} with email ${email}. 
            
            Message: ${message}`
        }
        
        transporter.sendMail(emailOptions, (error, info) => {
            if(error) {
                return console.log(error)
            }
            console.log("Message sent: %s", info.messageId)
        })


        res.send("Message sent. Thanks for contacting me!!")
    } else {
        res.send("Failed to send message! Please, try again :D ")
    }
    res.end()
})
module.exports = router