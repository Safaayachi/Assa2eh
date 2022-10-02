
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import TopHotelsDisplay from "../components/TopHotelsDisplay";
import MailBox from "../components/MailBox";
import NavBar from "../components/NavBar";
export default function Home() {
  return (
    <div className="relative h-full w-full">
      <NavBar/>
      <HeroSection />
      <TopHotelsDisplay/>
      <MailBox/>
      <Footer/>
    </div>
  );
}
