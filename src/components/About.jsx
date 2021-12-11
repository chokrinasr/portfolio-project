import React from 'react'

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src="https://cdn1.iconfinder.com/data/icons/seo-and-web-development-color/64/seo-and-web-development-05-512.png" alt="profil" className="a-img"/>
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">Présentation</h1>
            <p className="a-sub">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti distinctio et vitae, quae at totam, doloribus repellendus a doloremque nisi vero odio architecto 
            </p>
            <p className="a-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi iure quibusdam aliquid dolorum ea? Libero pariatur et iste. Ad assumenda earum dicta libero ullam eius dolorem? Nam aliquam asperiores impedit.consectetur eum porro eligendi incidunt, dolores inventore.</p>
            <div className="a-award">
            <img src="http://www.isg.rnu.tn/sites/default/files/logo_0_0.png" alt="" className="a-award-img" />
            <div className="a-award-texts">
                <h4 className="award-title">Institut supèrieur de gestion de Tunis</h4>
            <p className="award-desc">Diplôme de maitrise en informatique appliquée à la gestion - 2009</p>
            </div>
            </div>
            <div className="a-award">
            <img src="https://pi.tn/wp-content/uploads/2019/02/Logo-Pi-RVB.png" alt="" className="a-award-img2" />
            <div className="a-award-texts">
                <h4 className="award-title">Polytech international</h4>
            <p className="award-desc">Diplôme de mastère en génie logiciel - 2022</p>
            </div>
            </div>
            </div>
        </div>
    )
}

export default About
