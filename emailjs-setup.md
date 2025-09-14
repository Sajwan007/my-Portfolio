# EmailJS Setup Instructions

## Current Configuration
- **Public Key**: `pn-Bw_mS1_QQdofuV`
- **Service ID**: `service_79b0nyj`
- **Template ID**: `template_17us8im`
- **Recipient Email**: `abhisheksajwan458@gmail.com`

## Troubleshooting Steps

### 1. Verify EmailJS Account
1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Check if your account is active
3. Verify the public key is correct

### 2. Check Service Configuration
1. In EmailJS dashboard, go to "Email Services"
2. Verify `service_79b0nyj` exists and is active
3. Check if Gmail service is properly connected

### 3. Verify Template
1. Go to "Email Templates"
2. Check if `template_17us8im` exists
3. Verify template variables match:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{message}}`
   - `{{to_name}}`
   - `{{to_email}}`
   - `{{reply_to}}`

### 4. Test Template
```javascript
// Test template parameters
{
  from_name: "Test User",
  to_name: "Abhishek Sajwan", 
  from_email: "test@example.com",
  to_email: "abhisheksajwan458@gmail.com",
  message: "Test message",
  reply_to: "test@example.com"
}
```

### 5. Common Issues
- **401 Unauthorized**: Check public key
- **400 Bad Request**: Check template parameters
- **404 Not Found**: Check service/template IDs
- **CORS Error**: Check domain whitelist in EmailJS

### 6. Alternative Setup
If EmailJS doesn't work, consider:
1. **Formspree**: Simple form handling
2. **Netlify Forms**: If hosting on Netlify
3. **Custom Backend**: Node.js + Nodemailer
4. **Mailto Fallback**: Direct email client opening

## Quick Fix
Try updating the public key or creating a new EmailJS service if the current one is not working.
