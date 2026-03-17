import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:thakkur.anil@hotmail.com" data-cursor="disable">
                thakkur.anil@hotmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+919816477981" data-cursor="disable">
                +91 98164 77981
              </a>
            </p>
            <h4>Location</h4>
            <p>947 VPO Chowari, Distt Chamba, HP, India 176302</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/thakkur"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Anil Kumar</span>
            </h2>
            <h5>
              <MdCopyright /> 2025
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
