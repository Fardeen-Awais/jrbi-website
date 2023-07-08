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

export default async function join(req, res) {
  const { name, email, Service } = req.body;
  
  try {
    const info = await transporter.sendMail({
      // from: process.env.EMAIL_HOLDER,
      // to: 'joyceshan92@gmail.com', // Replace with your email address
      from: email,
      to: 'joyceshan92@gmail.com',
      subject: `New Join Us Form Submission by ${name}`,
      text: `A new customer name ${name} just submitted the form. His/Her email is ${email}. He/She wants to become the part of the research \n\n Here is the basic detail: \n\n Name: ${name} \n Email : ${email} \n Service: ${Service}`,
    });

    console.log('Message sent: successfully');
    res.status(200).json({ message: 'Form submission successful!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: `Something went wrong! + ${error}` });
  }
  
}
