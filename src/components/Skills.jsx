import React from "react";
import Skillcard from "./Skillcard";
import { skills } from "../data";
import { TiltDirection } from "react-particles-js";
function Skills() {
    return (
       <div className="row" id="skills">
       <div className="sk" >
            <div className="sk-texts">
                <h1 className="sk-title">Mes Compétences</h1>
                <p className="sk-desc">Mes compétences me permettent la réalisation de projets de conception et développement des sites et applications web, notamment l’assemblage des demandes utilisateurs, la production de code la création de maquettes et l’amélioration des designs pour impressionner les clients.

                </p>
            </div>
            <div className="sk-list row">
                {skills.map((item) => (
                    <Skillcard key={item.id} img={item.img} link={item.link} />
                ))}


            </div>

        </div>
        </div>
    )
}

export default Skills
