import React from "react";
import Skillcard from "./Skillcard";
import { skills } from "../data";
import { TiltDirection } from "react-particles-js";
function Skills() {
    return (
        <div className="sk">
            <div className="sk-texts">
                <h1 className="sk-title">Mes Compétences</h1>
                <p className="sk-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto deserunt fuga numquam ea, cum sint voluptate mollitia ipsum tenetur alias expedita officia consequuntur vel ex quae enim sequi odit itaque.</p>
            </div>
            <div className="sk-list">
                {skills.map((item) =>(
                    <Skillcard key={item.id} img={item.img} link={item.link}/>
                ))}


            </div>

        </div>
    )
}

export default Skills
