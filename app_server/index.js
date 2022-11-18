
express = require('express')
cors = require('cors')

const app = express()

app.use(express.json())
app.use(express.static('build'))
app.use(cors())

require('dotenv').config()

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server connected at ${PORT}`)
})

const { CourierClient } = require("@trycourier/courier");

const AUTH_KEY = process.env.AUTH_KEY
const courier = CourierClient({ authorizationToken: AUTH_KEY });

//data based scheduling
const schedule = require('node-schedule');

const scheduler = (emailID, content, days) => {

    const date = new Date(Date.now() + days*24*60*60*1000)
    console.log(`Mail is being scheduled for ${date}`)
    const job = schedule.scheduleJob(date, function(){
    console.log('Mail is scheduled');
    });
    const { requestId } = courier.send({
        message: {
            to: {
            data: {},
            email: `${emailID}`,
            },
            content: {
            title: "Recaller App",
            body: `${content}`,
            },
            routing: {
            method: "single",
            channels: ["email"],
            },
        },
        }).then((result) => {
            console.log("Email has been sent")
        }).catch(error => {
            console.log("There was a problem sending the email")
        })
}

// Example: send a basic message to an email recipient



app.post("/sendEmail", (request,response) => {
    const emailDetails = {
        emailID : request.body.emailID,
        content: request.body.content,
        days: Number(request.body.days)
    }
    response.status(201).json(emailDetails)
    scheduler(emailDetails.emailID,emailDetails.content, emailDetails.days)
    
    
    
})