import React from 'react'

const About = () => {
    return (
        <div className='container' id="about">
            <div className="row mb-2"  >
                <div className="col-md-6">
                    <div className="a-left">
                        <div className="a-card bg"></div>
                        <div className="a-card">
                            <img src="https://cdn1.iconfinder.com/data/icons/seo-and-web-development-color/64/seo-and-web-development-05-512.png" alt="profil" className="a-img" />
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="a-right">

                        <h1 className="a-title">Présentation</h1>

                        <p className="a-sub">Développeur Web professionnel, innovant et orienté avec plus de 10 ans d’expérience dans la conception et le développement d’applications Web dans divers secteurs.</p>

                        <p className="a-sub">Rigoureux, consciencieux, méticuleux, créatifs et organisé sont des adjectifs qui me qualifient et mes excellentes relations humaines me permettent de m'intégrer facilement dans une équipe.</p>

                        <p className="a-sub">Axé sur la création d’un code irréprochable et robuste avec une sécurité exceptionnelle.
                        </p>
                        <p className="a-sub">Apte à atteindre les objectifs de compatibilité tout en satisfaisant et en dépassant les demandes des clients.</p>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
