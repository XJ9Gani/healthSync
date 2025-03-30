import HealthAndSafetyOutlineRounded from "../svg/HealthAndSafetyOutlineRounded";
import Auth from "./Auth";

function Header() {
  return (
    <header className="h-[10vh] w-full bg-white opacity-90 fixed top-0 left-0 grid grid-cols-3 shadow-sm">
      <div className="flex items-center px-10">
        <HealthAndSafetyOutlineRounded />
        <h1 className="text-2xl font-bold bg-gradient-to-t from-[#537494] to-[#6591b9] text-transparent bg-clip-text">
          HealthSync{" "}
        </h1>
      </div>
      <div className=""></div>
      <Auth />
    </header>
  );
}

export default Header;
