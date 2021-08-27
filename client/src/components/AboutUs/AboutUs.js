import React from "react";
import LayoutPrimary from "layouts/layout-primary";
import img from '../../assets/images/dance.gif'; 

export default function AboutUs() {
  return (
    <LayoutPrimary>
    <div className="page_aboutUs">
      <div className="aboutUs_container">
      <div className="container_text">
        <h1>About Us</h1>
        <br/>
        <h2>The Project Members - Group 14</h2>
        <br></br>
        <ul className="names">
          <li >
            <a
              className="a-names"
              href="https://www.linkedin.com/in/federico-conte-grand/"
              target="FCG LinkedIn"
            >
              Federico Conte Grand
            </a>{" "}
          </li>
          <li>
            <a
              className="a-names"
              href="https://www.linkedin.com/in/franciscolopezcortes/"
              target="FL LinkedIn"
            >
              Francisco Lopez
            </a>{" "}
          </li>
          <li>
            <a
              className="a-names"
              href="https://www.linkedin.com/in/horacio-demaio/"
              target="HD LinkedIn"
            >
              Horacio Demahio
            </a>{" "}
          </li>
          <li>
            <a
              className="a-names"
              href="https://www.linkedin.com/in/juan-drouville/"
              target="JD LinkedIn"
            >
              Juan Drouville
            </a>{" "}
          </li>
          <li>
            <a
              className="a-names"
              href="https://www.linkedin.com/in/juanjose-peralta//"
              target="JJP LinkedIn"
            >
              Juan Jose Peralta
            </a>{" "}
          </li>
          <li>
            <a
              className="a-names"
              href="https://www.linkedin.com/in/lighuen-miranda/"
              target="LM LinkedIn"
            >
              Lighuen Miranda
            </a>{" "}
          </li>
          <li>
            <a
              className="a-names"
              href="https://www.linkedin.com/in/pablocasalsit/"
              target="PLC LinkedIn"
            >
              Pablo Casals
            </a>{" "}
          </li>
        </ul>
        <br/>
        <h2>The Project</h2>
        <br></br>
        <h4>
          Build an Ecommerce applying all the skills learned in SoyHenry.com´s
          bootcamp. They include React and Redux for the FrontEnd. And Express,
          Sequelize and PostgreSQL for the BackEnd. Also investigate and learn
          how to deploy a project and many other tools in order to accomplish
          all the features given. In aour case, we selected a wine ecommerce
          inwhich we can sell wines and also accesories. The Admin can make
          admin any user and also can block a user and prevent it from buying.
          The are also several filters and a way to select items and save them
          in a favorites caroussel.{" "}
        </h4>
        </div>
        <img className="gif" src={img}/>
      </div>
      </div>
    </LayoutPrimary>
  );
}
