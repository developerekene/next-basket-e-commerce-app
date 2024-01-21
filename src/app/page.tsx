import BestServices from "./components/BestServices";
import BetterExpere from "./components/BetterExpere";
import FeaturedPost from "./components/FeaturedPost";
import FeaturedProducts from "./components/FeaturedProducts";
import Footer from "./components/Footer";
import Furniture from "./components/Furniture";
import NavBar from "./components/NavBar";
import TopNavBar from "./components/TopNavBar";
import WhatTheySay from "./components/WhatTheySay";

export default function Home() {
  return (
    <>
      <TopNavBar />
      <NavBar />
      <Furniture />
      <FeaturedProducts />
      <BestServices />
      <FeaturedPost />
      <WhatTheySay />
      <BetterExpere />
      <Footer />
    </>
  );
}
