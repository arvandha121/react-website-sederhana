import '../components/Navbar'
import '../components/Footer'

import '../styles/Home.css'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Tutors from '../components/Tutors'
import Patners from '../components/Patners'
import Contact from '../components/Contact'

import parse from 'html-react-parser'

import { HomeSection } from '../data/HomeSection'
import { CourseSection } from '../data/CourseSection'
import { TutorsSection } from '../data/TutorsSection'
import { PatnersSection } from '../data/PatnersSection'

function Home() {
  return (
    <>
        <Navbar/>
        {/* HOME */}
        <div className='wrapper'>
            <section id="home">
            <img src={HomeSection.image} alt="Home" />
            <div className="kolom">
                {parse(HomeSection.content)}
            </div>
        </section>
        </div>

        {/* COURSE */}
        <div className="wrapper">
            <section id="courses">
                <div className="kolom">
                {parse(CourseSection.content)}
                </div>
                <img src={CourseSection.image} alt="Course" />
            </section>
        </div>

        {/* TUTORS */}
        <section id="tutors">
            <div className="tengah">
                <div className="kolom">
                    {parse(TutorsSection.content)}
                </div>
                <Tutors/>
            </div>
        </section>

        {/* PATNERS */}
        <section id="partners">
            <div className="tengah">
                <div className="kolom">
                    {parse(PatnersSection.content)}
                </div>
                <Patners/>
            </div>
        </section>

        {/* CONTACT */}
        <Contact/>

        {/* FOOTER */}
        <Footer/>
    </>
  )
}

export default Home
