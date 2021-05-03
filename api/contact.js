const express = require('express')
const nodemailer = require('nodemailer')

const app = express()

app.use(express.json())

app.get('/', function (req, res) {
  res.status(405).json({ error: 'sorry!' })
})

app.post('/', function (req, res) {
  const html = `
  <h1>Tienes una nueva solicitud </h1>
  <ul>
  <li>Nombre:  <b>${req.body.name}, ${req.body.lastName} </b></li>
  <li>Telefono:  <b>${req.body.tlf} </b></li>
  <li>Email: <b> ${req.body.email} </b></li>
  <li>Region:  <b>${req.body.region} </b></li>
  <li>Comuna:  <b>${req.body.commune} </b></li>
  <li>Compañia:  <b>${req.body.company ? req.body.company : 'Sin Compañia'} </b></li>
  </ul>
  <p>Desea cotizar, <b>${req.body.model} </b></p>
  <p> ${req.body.msg} </p>
  `

  main(req, res, html).catch(console.error);
})
module.exports = {
  path: '/api/contact',
  handler: app
}

async function main(req, res, html) {
  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'solucionesinformaticasjtc@gmail.com',
      pass: 'lmseyjiepozjykol'
    }
   });

  let info = await transporter.sendMail({
    from: 'solucionesinformaticasjtc@gmail.com', // sender address
    to: "solucionesinformaticasjtc@gmail.com", // list of receivers
    subject: `Tienes una solicitud de ${req.body.name}`, // Subject line
    text: "", // plain text body
    html: html, // html body
  });

  console.log("Message sent: %s", info.messageId);

  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
   await res.status(200).json({ 'Enviado': req.body })
}