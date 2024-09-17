import Navbar from "../Ui/NavBar";
import Slider from "../Ui/Slider";

export default function LandingPage() {
  return (
    <div className="w-full">
      <Navbar show={true}/>
      <Slider />
    </div>
  );
}
