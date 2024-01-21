import BestServices from "./components/BestServices";
import FeaturedPost from "./components/FeaturedPost";
import FeaturedProducts from "./components/FeaturedProducts";
import Furniture from "./components/Furniture";
import NavBar from "./components/NavBar";
import TopNavBar from "./components/TopNavBar";

export default function Home() {
  return (
    <>
      <TopNavBar />
      <NavBar />
      <Furniture />
      <FeaturedProducts />
      <BestServices />
      <FeaturedPost />
    </>
  );
}
