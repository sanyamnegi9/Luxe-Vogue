import Carousel from "../Components/Carousel";
import BlogSection from "../Components/Blog/BlogSection";
import NewArrivals from "../Components/NewArrivals";
import ProductSection from "../Components/Product/ProductSection";
import Services from "../Components/Services";

const Home = () => {
  return (
    <>
      <Carousel autoSlide={true}/>
      <ProductSection heading="men's clothing" category="men's clothing" />
      <ProductSection heading="women's clothing" category="women's clothing" />
      <NewArrivals />
      <BlogSection />
      <Services />
    </>
  );
};

export default Home;
