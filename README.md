# TOTP Generator & QR Code

A clean, modern web app to generate Time-based One-Time Passwords (TOTP) with QR code support.  
Ideal for implementing two-factor authentication (2FA) workflows and validating codes easily.

---

## Features

- Generate TOTP tokens based on Base32 secret keys.
- Create QR codes for easy scanning with authenticator apps.
- Copy generated tokens to clipboard with one click.
- Validate user-entered codes against the current TOTP.
- Responsive and user-friendly interface with smooth animations.
- Stylish, animated gradient background and neat layout.
- Supports standard TOTP parameters: SHA-1, 6 digits, 30 seconds period.

---

## Technologies Used

- [OTPAUTH](https://github.com/hectorm/otpauth) library for TOTP generation and validation.
- [QRCode.js](https://github.com/soldair/node-qrcode) for QR code rendering.
- Vanilla JavaScript, HTML5, and CSS3 with CSS Grid and animations.

---

## How to Use

1. Enter your Base32 secret key in the input field.
2. Click **Generate QR Code** to display a QR code for scanning with an authenticator app.
3. Click **Generate Token** to generate the current TOTP code.
4. Copy the token using the **Copy Token** button.
5. To verify, enter a code in the validation input and click **Validate Code**.
6. The app will confirm if the entered code is valid or invalid.

---

## Screenshots

![Screenshot of the app showing TOTP code and QR code](screenshot.png)

---

## Installation & Setup

This is a static web page. You can simply open `index.html` in any modern browser with internet access (for CDN scripts).

Alternatively, clone the repo and serve it locally:

```bash
git clone https://github.com/yourusername/totp-generator.git
cd totp-generator
# Open index.html in your favorite browser
````

---

## Customization

* Change issuer and label values in the JS for your own app/user.
* Adjust token digits, period, or algorithm in OTPAuth initialization.
* Modify styling or animations in the CSS for your branding.

---

## License

MIT License © 2025 Your Name

---

## Acknowledgments

* [OTPAUTH](https://github.com/hectorm/otpauth)
* [QRCode.js](https://github.com/soldair/node-qrcode)
