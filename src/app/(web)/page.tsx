import HeroSection from "@/components/HeroSection/HeroSection"
import PageSearch from "@/components/PageSearch/PageSearch"
import Gallery from "@/components/Gallery/Gallery"
import NewsLetter from "@/components/NewsLetter/NewsLetter"
import { getFeaturedRoom } from "@/libs/apis"
const Home = async () => {

  const featuredRoom = await getFeaturedRoom();
  console.log(featuredRoom)
  return (
    <><HeroSection />
    <PageSearch />
    <Gallery />
    <NewsLetter />
    </>
  )
}
export default Home