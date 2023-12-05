import BlogSection from "../Components/Blog/BlogSection";
import Header from "../Components/Header";
import NewArrivals from "../Components/NewArrivals";
import ProductSection from "../Components/Product/ProductSection";
import Services from "../Components/Services";

const Home = () => {
  return (
    <>
      <Header />
      <ProductSection heading="men's clothing" category="men's clothing" />
      <ProductSection heading="women's clothing" category="women's clothing" />
      <NewArrivals />
      <BlogSection />
      <Services />
    </>
  );
};

export default Home ;
