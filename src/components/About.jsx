import React from 'react'

const About = () => {
    return (
        <div className="a" id="about" >
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src="https://cdn1.iconfinder.com/data/icons/seo-and-web-development-color/64/seo-and-web-development-05-512.png" alt="profil" className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">Présentation</h1>

                <p className="a-sub">Développeur Web professionnel, innovant et orienté avec plus de 10 ans d’expérience dans la conception et le développement d’applications Web dans divers secteurs.</p>

                <p className="a-sub">Rigoureux, consciencieux, méticuleux, créatifs et organisé sont des adjectifs qui me qualifient et mes excellentes relations humaines me permettent de m'intégrer facilement dans une équipe.</p>

                <p className="a-desc">Axé sur la création d’un code irréprochable et robuste avec une sécurité exceptionnelle.
                </p>
                <p className="a-desc">Apte à atteindre les objectifs de compatibilité tout en satisfaisant et en dépassant les demandes des clients.</p>
                <div className="a-award">
                    <img src="http://www.isg.rnu.tn/sites/default/files/logo_0_0.png" alt="" className="a-award-img" />
                    <div className="a-award-texts">
                        <h4 className="award-title">Institut supèrieur de gestion de Tunis</h4>
                        <p className="award-desc">Diplôme de maitrise en informatique appliquée à la gestion - 2009</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About
