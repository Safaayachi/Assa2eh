
import Footer from "../components/Footer";
import Header from "../components/Header";
import Search from "../components/Search";
import MailBox from "../components/MailBox";
export default function Home() {
  return (
    <div className="relative h-full w-full">
      <Header />
      <Search/>
      <MailBox/>
      <Footer/>
    </div>
  );
}
