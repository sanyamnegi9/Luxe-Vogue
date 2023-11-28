import Blogs from "../Components/BlogSec";
import DisplayCategory from "../Components/DisplayCategory";
import Header from "../Components/Header";
import ProductComponent from "../Components/ProductsSec"
import NewArrivals from "../Components/NewArrivals";
import Services from "../Components/Services";
import Navbar from "../Components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar/>
      <Header />
      <ProductComponent/>
      <NewArrivals />
      <DisplayCategory />
      <Blogs />
      <Services />
    </>
  );
};

export { Home };
