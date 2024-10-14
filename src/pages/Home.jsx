import ExclusiveCollections from "components/ExclusiveCollections/ExclusiveCollections"
import PromotionBanner from "components/PromotionBanner/PromotionBanner"
import Header1 from "components/hearder/Header1"
import Header2 from "components/hearder/Header2"
import Header3 from "components/hearder/Header3"
import Hero from "components/hero/Hero"
import Main from "components/main/Main"
import Section from "components/sections/Section"

const Home = () => {
    return (
        <>
            <Header1 />
            <Header2 />
            <Header3 />
            <Section />
            <Hero />
            <Main />
            <ExclusiveCollections />
            <PromotionBanner/>
            {/* here will be other home components like for you products */}
        </>
    )
}

export default Home
