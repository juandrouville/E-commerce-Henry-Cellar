import React from 'react';
import LayoutPrimary from "layouts/layout-primary";

export default function AboutUs() {

    return (
        <LayoutPrimary>  
            <div className="aboutUs_container">
            <h1>About Us</h1>   
            <br></br>
            <br></br>
            <br></br>
            <h2>The Project Members - Group 14</h2>
            <br></br>
            <ul>
                <li>Federico Conte Grand</li>
                <li>Francisco Lopez</li>
                <li>Horacio Demahio</li>
                <li>Juan Drouville</li>
                <li>Juan Jose Peralta</li>
                <li>Lighuen Miranda</li>
                <li>Pablo Casals</li>
            </ul>
            <br></br>
            <br></br>
            <br></br>
            <h2>The Project</h2>
            <br></br>
            <h4>Build an Ecommerce applying all the skills learned in SoyHenry.com´s bootcamp. They include React and Redux for the FrontEnd. And Express, Sequelize and PostgreSQL for the BackEnd. 
                Also investigate and learn how to deploy a project and many other tools in order to accomplish all the features given. 
                In aour case, we selected a wine ecommerce inwhich we can sell wines and also accesories. 
                The Admin can make admin any user and also can block a user and prevent it from buying.
                The are also several filters and a way to select items and save them in a favorites caroussel. </h4>
        </div>
        </LayoutPrimary>
    );
}