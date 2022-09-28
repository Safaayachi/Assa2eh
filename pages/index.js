
import Footer from "../components/Footer";
import Header from "../components/Header";
import TopHotelsDisplay from "../components/TopHotelsDisplay";
import MailBox from "../components/MailBox";
import NavBar from "../components/NavBar";
export default function Home() {
  return (
    <div className="relative h-full w-full">
      <NavBar/>
      <Header />
      <TopHotelsDisplay/>
      <MailBox/>
      <Footer/>
    </div>
  );
}
