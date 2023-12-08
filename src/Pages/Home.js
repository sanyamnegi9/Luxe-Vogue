import Carousel from "../Components/Carousel";
import BlogSection from "../Components/Blog/BlogSection";
import NewArrivals from "../Components/NewArrivals";
import ProductSection from "../Components/Product/ProductSection";
import Services from "../Components/Services";
import Header from "../Components/Header";

const Home = () => {
  return (
    <div div className="flex flex-col gap-12">
      {/* <Carousel autoSlide={true}/> */}
      <Header />
      <ProductSection heading="men's clothing" category="men's clothing" />
      <ProductSection heading="women's clothing" category="women's clothing" />
      <NewArrivals />
      <BlogSection />
      <Services />
    </div>
  );
};

export default Home;
