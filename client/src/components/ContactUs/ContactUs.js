import React from "react";
import emailjs from "emailjs-com";
import LayoutPrimary from "layouts/layout-primary";
import MapSection from "../Maps/Maps";
import { GrInstagram } from "react-icons/gr";

const location = {
  address: "9 de Julio s/n, Ciudad de Buenos Aires, Argentina",
  lat: -34.60367706415473,
  lng: -58.381581131043625,
};

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_okogjnh",
        "template_u1zeg1d",
        e.target,
        "user_fV3sSeMvZQ3M9jkEFub1p"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <LayoutPrimary>
      <div className="contact-us-container">
        <div className="contact-us">
          <h2>Send us your questions and suggestions...</h2>
          <br></br>
          <br></br>
          <form className="contact-form" onSubmit={sendEmail}>
            <input
              type="hidden"
              name="contact_number"
              className="contact-form__input"
            />
            <label className="label">Name</label>
            <input
              type="text"
              name="user_name"
              className="contact-form__input"
            />
            <label className="label">Email</label>
            <input
              type="email"
              name="user_email"
              className="contact-form__input"
            />
            <label className="label">Message</label>
            <textarea className="contact-form__textarea" name="message" />
            <input className="send" type="submit" value="Send" />
          </form>
        </div>
        <div className="contact-us-info">
          <h2>Come visit us:</h2>
          <br></br>
          <h3>9 de Julio s/n - C.A.B.A. - Argentina</h3>
          <br></br>
          <h4>Phone: +5411-142021</h4>
          <br></br>
          <a className="a" href="https://www.instagram.com/henrycellar/" target="instagram">
            <GrInstagram className="icon"/> <h4> @henrycellar</h4>
          </a>
        </div>
      </div>
      <div>
        <MapSection location={location} zoomLevel={15} />
      </div>
    </LayoutPrimary>
  );
}
