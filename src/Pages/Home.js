import Blogs from "../Components/Blogs";
import DisplayCategory from "../Components/DisplayCategory";
import Header from "../Components/Header";
import NewArrivals from "../Components/NewArrivals";
import ProductComponent from "../Components/ProductComponent";
import Services from "../Components/Services";

const Home = () => {
  return (
    <>
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
