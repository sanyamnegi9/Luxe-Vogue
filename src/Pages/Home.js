import Blogs from "../Components/Blogs";
import DisplayCategory from "../Components/DisplayCategory";
import Header from "../Components/Header";
import NewArrivals from "../Components/NewArrivals";
import Products from "../Components/Products";
import Services from "../Components/Services";
const Home = () => {
  return (
    <>
      <Header />
      <Products/>
      <NewArrivals />
      <DisplayCategory />
      <Blogs />
      <Services />
    </>
  );
};

export { Home };
