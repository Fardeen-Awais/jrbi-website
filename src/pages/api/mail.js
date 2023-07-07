import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_HOLDER,
    pass: process.env.EMAIL_AUTH_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export default async function sendEmail(req, res) {
  const { name, email, message } = req.body;
  // console.log(name,email,message)
  try {
    const info = await transporter.sendMail({
      from: email,
      // joyceshan92@gmail.com
      to: 'fardeenjutt99@gmail.com',
      subject: `Feedback message by ${name} `,
      text: `Dear Jolyce,\n\nHello jolyce, A new customer message you\n\n${message}\n\nBest regards,\n${name}`
    });

    console.log('Message sent: %s', info.messageId);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: `Something went wrong! + ${error}` });
  }
}
