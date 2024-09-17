import { Outlet } from "react-router-dom";

import SideBar from "./SideBar";
import Navbar from "./NavBar";

export default function UserAppLayout() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Navbar />

      <div className="flex flex-1 overflow-hidden">
        <div className="hidden  md:flex  md:w-3/12 h-full overflow-y-auto">
          <SideBar />
        </div>

        <div className={`flex-1 overflow-y-auto bg-secondary`}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
