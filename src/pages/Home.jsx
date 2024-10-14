import ExclusiveCollections from "components/ExclusiveCollections/ExclusiveCollections";
import Icon from "components/Icons/Icon";
import PromotionBanner from "components/PromotionBanner/PromotionBanner";
import Header1 from "components/hearder/Header1";
import Header2 from "components/hearder/Header2";
import Header3 from "components/hearder/Header3";
import Hero from "components/hero/Hero";
import AllProduct from "components/main/AllProduct";

import WomenProduct from "components/main/WomenProduct";
import MenProduct from "components/main/menProduct";
import Section from "components/sections/Section";

const Home = () => {
  return (
    <>
      <Header1 />
      <Header2 />
      <Header3 />
      <Section />
      <Hero />
      <AllProduct/>
      <ExclusiveCollections />
      <MenProduct />
          <PromotionBanner />
          <WomenProduct/>
      <Icon />
      {/* here will be other home components like for you products */}
    </>
  );
};

export default Home;
