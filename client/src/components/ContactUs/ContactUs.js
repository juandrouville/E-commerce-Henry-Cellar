import React from 'react';
import emailjs from 'emailjs-com';
import LayoutPrimary from "layouts/layout-primary";
import MapSection from "../Maps/Maps";

const location = {
  address: '9 de Julio s/n, Ciudad de Buenos Aires, Argentina',
  lat: -34.60367706415473,
  lng: -58.381581131043625,
}

export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_okogjnh', 'template_u1zeg1d', e.target, 'user_fV3sSeMvZQ3M9jkEFub1p')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <LayoutPrimary>
      <div className="contact-us">
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
    </div>
    <div>
      <MapSection location={location} zoomLevel={15} />
    </div>
    </LayoutPrimary>
  );
}