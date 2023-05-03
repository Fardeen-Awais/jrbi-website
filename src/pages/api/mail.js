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
  console.log(name,email,message)
  try {
    const info = await transporter.sendMail({
      from: email,
      to: 'fardeenjutt99@gmail.com ',
      subject: 'New message from your website!',
      text: `Dear Jolyce,\n\nThank you for contacting us through our website. We have received your message and will respond as soon as possible.\n\n${message}\n\nBest regards,\n${name}`
    });

    console.log('Message sent: %s', info.messageId);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: `Something went wrong! + ${error}` });
  }
}
