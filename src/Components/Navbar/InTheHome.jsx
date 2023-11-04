import { Link } from "react-router-dom";
import { inTheHome } from "../../Data";

const InTheHome = () => {
  return (
    <div className="drop-items-container">
      <div className="category">
        <div className="heading">Living</div>
        <div>Shop All</div>
        <div>Art / Mirrors</div>
        <div>Baskets</div>
        <div>Candles</div>
        <div>Incense / Holders</div>
        <div>Lighting</div>
        <div>Pillows</div>
        <div>Planters</div>
      </div>

      <div className="category">
        <div className="heading">Kitchen</div>
        <div> Shop All</div>
        <div>Bar Accessories</div>
        <div>Dishware / Ceramics</div>
        <div>Cleaning Supplies</div>
        <div>Coffee / Tea</div>
        <div>Containers / Jars</div>
        <div>Glassware</div>
      </div>
      <div className="category">
        <div className="heading">bed / bath</div>
        <div>Shop All</div>
        <div>bed / bath</div>
        <div>Body / Face</div>
        <div>Grooming</div>
        <div>Soaps</div>
      </div>
      <div className="category">
        <div className="heading">gift shop</div>
        <div>Gift Cards</div>
        <div>Stationery</div>
        <div>Gifts Under $100</div>
      </div>
    </div>
  );
};
export default InTheHome;
