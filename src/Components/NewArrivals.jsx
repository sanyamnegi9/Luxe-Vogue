import { Link } from "react-router-dom"
import "../Styles/NewArrivals.scss"


const NewArrivals = () => {
  return (
    <div className="new-arrival">
      <h2>New Arrivals</h2>
      <Link to="/">Shop Now</Link>
    </div>
  )
}

export default NewArrivals