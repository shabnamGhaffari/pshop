import React from "react";

const ContactUs = () => {
  return (
    <>
      <div class="contact-area d-flex align-items-center">
        <div class="contact-info">
          <h2>راه های ارتباط با ما</h2>
          <p>
            Mauris viverra cursus ante laoreet eleifend. Donec vel fringilla
            ante. Aenean finibus velit id urna vehicula, nec maximus est
            sollicitudin.
          </p>

          <div class="contact-address mt-50">
            <p>
              <span>آدرس:</span> 10 Suffolk st Soho, London, UK
            </p>
            <p>
              <span>شماره تماس:</span> +12 34 567 890
            </p>
            <p>
              <a href="mailto:contact@essence.com">contact@essence.com</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
