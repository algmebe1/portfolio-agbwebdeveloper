const express = require('express')
const router = express.Router()
const cors = require('cors')
const nodemailer = require('nodemailer')
// const path = require('path')

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use('/', router)
/* app.use(express.static(path.join(__dirname, 'client', 'build'))) */
/* app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
}) */
app.listen(port, () => console.log('Server Running'))

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'agbwebdeveloper2020@gmail.com',
    pass: 'skylabmola'
  }
})

contactEmail.verify((error) => {
  if (error) {
    console.log(error)
  } else {
    console.log('Ready to Send')
  }
})

router.post('/contact', (req, res) => {
  const name = req.body.name
  const email = req.body.email
  const message = req.body.message
  const mail = {
    from: name,
    to: 'agbwebdeveloper2020@gmail.com',
    subject: 'Contact Form Message',
    html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`
  }
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: 'failed' })
    } else {
      res.json({ status: 'sent' })
    }
  })
})
