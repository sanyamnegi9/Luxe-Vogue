import { Link } from "react-router-dom";
import image from "../Assets/headerImg.jpg";

const NewArrivals = () => {
  return (
    <div className="relative h-[20rem] w-full flex flex-col items-center justify-center gap-4">
      <img
        src={image}
        alt="new-arrivals"
        className="absolute top-0 h-full w-full object-cover bg-center z-[2]"
      />
      <h2 className="z-[5]">New Arrivals</h2>
      <Link to="/" className="btn secondary-btn z-[5]">Shop Now</Link>
    </div>
  );
};

export default NewArrivals;
