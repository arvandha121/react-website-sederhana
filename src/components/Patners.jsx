import '../styles/Patners.css'
import { patnersList } from '../data/PatnersSection'

function Patners() {
  return (
    <div className="partner-list">
      {patnersList.map((partner) => (
        <div className="kartu-partner" key={partner.name}>
          <img src={partner.logo} alt={partner.name} />
          <p>{partner.name}</p>
        </div>
      ))}
    </div>
  )
}

export default Patners
