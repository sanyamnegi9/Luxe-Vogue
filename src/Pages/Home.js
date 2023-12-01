import Blogs from "../Components/Blog";
import Header from "../Components/Header";
import NewArrivals from "../Components/NewArrivals";
import Services from "../Components/Services";
import Product from "../Components/Product";

const Home = () => {
  return (
    <>
      <Header />
      <Product/>
      <NewArrivals />
      <Blogs />
      <Services />
    </>
  );
};

export default Home ;
