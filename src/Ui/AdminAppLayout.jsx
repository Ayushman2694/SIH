import { Outlet } from "react-router-dom";
import Navbar from "./NavBar";
import AdminSideBar from "./AdminSideBar";

export default function AdminAppLayout() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Navbar />

      <div className="flex flex-1 overflow-hidden">
        <div className="hidden  md:flex  md:w-3/12 h-full overflow-y-auto">
          <AdminSideBar />
        </div>

        <div className={`flex-1 overflow-y-auto bg-secondary`}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
