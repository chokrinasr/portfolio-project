import Phone from "./icons/phone.png";
import Email from "./icons/email.png";
import Adress from "./icons/adress.png";
import { useRef, useState } from "react";
import emailjs from 'emailjs-com';
const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_76aa7ri', 'template_x6d7c9s', formRef.current, 'user_aiJd2iqHV7LwOY30h7ExB')
      .then((result) => {
        console.log(result.text);
        setDone(true);
      }, (error) => {
        console.log(error.text);
      });
  }
  return (
    <div className="row mb-2" id="contact">

      <div className="col-md-6">
        <div className="left">
          <h3 className="c-title">Informations générales</h3>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +216 52 555 240
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              choki.nasr@live.fr
            </div>
            <div className="c-info-item">
              <img src={Adress} alt="" className="c-icon" />
              13, Rue de Tunis , Mourouj 1 2074
            </div>
          </div>
          <img src="assets/shake.svg" alt="" />
        </div>
      </div>
      <div className="col-md-6">
        <div className="right">
          <h3 className="c-title">Formulaire de contact</h3>

          <form ref={formRef} onSubmit={handleSubmit} id="myForm">
            <input type="text" placeholder="Nom" name="user_name" />
            <input type="text" placeholder="Sujet" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea name="message" palceholder="message" rows="5"></textarea>
            <button type="submit">Envoyer</button>
            <div className="c-message">{done && "Votre message a été bien transmis, Merci :)"}</div>

          </form>
        </div>

      </div>
    </div>
  )
}

export default Contact
