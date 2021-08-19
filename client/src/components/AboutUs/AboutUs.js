import React from 'react';
import LayoutPrimary from "layouts/layout-primary";

export default function AboutUs() {

    return (
        <LayoutPrimary>  
            <div className="aboutUs_container">
            <h1>About Us</h1>   
            <br></br>
            <h2>The Project Members</h2>
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
            <h2>The Project</h2>
            <br></br>
            <p>Build an Ecommerce applying all the skills learned in SoyHenry.com bootcamp. They include React and Redux for the FrontEnd. And Express, Sequelize and PostgreSQL for the BackEnd. 
                Also investigate and learn how to deploy a project and many other tools in order to accomplish all the features given. </p>
        </div>
        </LayoutPrimary>
    );
}