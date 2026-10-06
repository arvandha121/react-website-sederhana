import '../styles/Contact.css'
import parse from 'html-react-parser'
import { contactSection } from '../data/ContactSection'

function Contact() {
  return (
    <div id="contact">
        <div className="wrapper">
            <div className="footer">
                <div className="footer-section">
                    {parse(contactSection[0].content)}
                </div>
                <div className="footer-section">
                    {parse(contactSection[1].content)}
                </div>
                <div className="footer-section">
                    {parse(contactSection[2].content)}
                </div>
                <div className="footer-section">
                    {parse(contactSection[3].content)}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
