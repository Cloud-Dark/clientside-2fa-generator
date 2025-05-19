let totp = null;

    const secretInput = document.getElementById('secretInput');
    const codeDisplay = document.getElementById('code');
    const qrCanvas = document.getElementById('qr');
    const userCodeInput = document.getElementById('userCodeInput');
    const validationResult = document.getElementById('validationResult');

    document.getElementById('btnGenerateToken').addEventListener('click', () => {
      const secret = secretInput.value.trim();
      if (!secret) return alert('Please enter a Base32 secret token!');

      try {
        totp = new OTPAuth.TOTP({
          issuer: 'MyApp',
          label: 'user@example.com',
          algorithm: 'SHA1',
          digits: 6,
          period: 30,
          secret: OTPAuth.Secret.fromBase32(secret),
        });
      } catch (e) {
        alert(e);
        return;
      }

      const token = totp.generate();
      codeDisplay.textContent = token;
      validationResult.textContent = '';

      // Trigger pulse animation
      codeDisplay.classList.remove('pulse');
      void codeDisplay.offsetWidth; // reflow to restart animation
      codeDisplay.classList.add('pulse');
    });

    document.getElementById('btnGenerateQR').addEventListener('click', () => {
      const secret = secretInput.value.trim();
      if (!secret) return alert('Please enter a Base32 secret token!');

      try {
        const tempTotp = new OTPAuth.TOTP({
          issuer: 'MyApp',
          label: 'user@example.com',
          secret: OTPAuth.Secret.fromBase32(secret),
        });
        const uri = tempTotp.toString();

        QRCode.toCanvas(qrCanvas, uri, { width: 200 }, (error) => {
          if (error) {
            alert('Failed to generate QR code.');
            console.error(error);
          }
        });
      } catch (e) {
        alert('Invalid secret format.');
      }
    });

    document.getElementById('btnCopyToken').addEventListener('click', () => {
      const code = codeDisplay.textContent;
      if (!code || code === 'Waiting...') return alert('No token to copy!');

      navigator.clipboard.writeText(code)
        .then(() => alert('Token copied to clipboard!'))
        .catch(() => alert('Failed to copy token.'));
    });

    document.getElementById('btnValidateCode').addEventListener('click', () => {
      if (!totp) return alert('Generate the token first to enable validation.');

      const inputCode = userCodeInput.value.trim();
      if (!inputCode) return alert('Please enter a code to validate.');

      const delta = totp.validate({ token: inputCode, window: 1 });
      if (delta !== null) {
        validationResult.textContent = '✅ Code is valid!';
        validationResult.style.color = 'green';
      } else {
        validationResult.textContent = '❌ Code is invalid!';
        validationResult.style.color = 'red';
      }

      // Trigger blink animation on validation result
      validationResult.classList.remove('blink');
      void validationResult.offsetWidth; // reflow
      validationResult.classList.add('blink');
    });