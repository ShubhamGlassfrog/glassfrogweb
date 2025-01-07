import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phone, website } = req.body;

    // Create a transporter using your email service (e.g., Gmail, SMTP, etc.)
    const transporter = nodemailer.createTransport({
      service: 'gmail', // You can use other services like SendGrid, etc.
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your email password or app password
      },
    });

    // Set up the email data
    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender email
      to: 'amit_bajaj@glassfrog.design', // Recipient email (replace with actual recipient)
      subject: 'Glassfrog Site Audit New Form Submission',
      text: `
        You have a new form submission for site audit:

        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Website: ${website}
      `,
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Form submitted successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Failed to send email. Please try again later.' });
    }
  } else {
    // If the method is not POST, return a 405 Method Not Allowed error
    res.status(405).json({ message: 'Method not allowed' });
  }
}
