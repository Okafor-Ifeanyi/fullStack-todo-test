import nodemailer from 'nodemailer'
import { env } from './envConfig'

const emailSender = env.SMTP_USER
const emailPassword = env.SMTP_PASS

interface MailOptions {
  from: string
  to: string
  subject: string
  text?: string
  html?: string
}
// Function to send a verification email
export const sendEmail = async (mailOptions: MailOptions) => {
  try {
    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // e.g., 'Gmail'
      auth: {
        user: emailSender,
        pass: emailPassword,
      },
    })

    // Send the email
    await transporter.sendMail(mailOptions)
  } catch (error) {
    throw error // You can handle or log the error as needed
  }
}


const now = new Date()
const time = now.toString()

export const sendRegistrationEmail = async (
    email: string,
    name: string,
  ) => {
    const mailOptions = {
      from: emailSender,
      to: email,
      subject: `Welcome to Cartle! 🎉`,
      html: `
        <style>
          body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
              background-color: #ffffff;
              color: #333333;
          }
          .email-container {
              max-width: 600px;
              margin: 0 auto;
              border: 1px solid #f0f0f0;
              border-radius: 8px;
              overflow: hidden;
          }
          .header img {
              width: 100%;
              height: auto;
          }
          .content {
              padding: 20px;
          }
          .content h1 {
              color: #ff6600;
              font-size: 24px;
              margin-bottom: 10px;
          }
          .content p {
              line-height: 1.6;
              margin-bottom: 15px;
          }
          .cta-button {
              display: inline-block;
              margin: 20px 0;
              padding: 10px 20px;
              background-color: #ff6600;
              color: #ffffff;
              text-decoration: none;
              font-weight: bold;
              border-radius: 5px;
          }
          .cta-button:hover {
              background-color: #e55d00;
          }
          .footer {
              text-align: center;
              padding: 15px;
              font-size: 12px;
              background-color: #f9f9f9;
          }
          .footer p {
              margin: 0;
          }
        </style>
        <body>
          <div class="email-container">
            <div class="header">
              <img src="https://res.cloudinary.com/dc5ydg6it/image/upload/v1737417269/siiyqigpkqecuuwupgr4.jpg" alt="Cartle Logo" />
            </div>
  
            <div class="content">
              <h1>Welcome aboard, ${name} 👋</h1>
              <p>We're excited to have you at <strong>Cartle</strong>!</p>
              <p>Whether you're here to set up your store or explore our features, you're in good hands.</p>
  
              <p>To get started, click the button below:</p>
              <a href="https://www.cartle.io/dashboard" class="cta-button">Go to My Dashboard</a>
  
              <p>If you have any questions, feel free to reach out — we're always here to help.</p>
  
              <p>Cheers,<br><strong>The Cartle Team</strong><br><a href="https://www.cartle.io">www.cartle.io</a></p>
  
              <p><em>P.S. Be sure to check your inbox for tips, updates, and success stories from other Cartle users!</em></p>
            </div>
  
            <div class="footer">
              <p>&copy; 2025 Cartle. All Rights Reserved.</p>
            </div>
          </div>
        </body>
      `,
    }
  
    await sendEmail(mailOptions)
  }
