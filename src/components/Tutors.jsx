import '../styles/Tutors.css'
import { tutorsList } from '../data/TutorsSection'

function Tutors() {
  return (
    <div className="tutor-list">
      {tutorsList.map((tutor) => (
        <div className="kartu-tutor" key={tutor.name}>
          <img src={tutor.image} alt={tutor.name} />
          <p>{tutor.name}</p>
        </div>
      ))}
    </div>
  )
}

export default Tutors
