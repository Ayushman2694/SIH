import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHome, FaSearch } from "react-icons/fa";
import SideBarItem from "./SideBarItem";
import { IoIosLogOut, IoMdSettings } from "react-icons/io";
import { PiCertificateFill } from "react-icons/pi";

export default function AdminSideBar() {
  const [itemSelected, setItemSelected] = useState(
    localStorage.getItem("sidebar-selected") || "dashboard"
  );
  const [isRendered, setIsRendered] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("sidebar-selected", itemSelected);
  }, [itemSelected]);

  useEffect(() => {
    setIsRendered(true);
  }, []);

  const getItemStyle = (index) => ({
    opacity: isRendered ? 1 : 0,
    transform: isRendered
      ? "translateX(0) scale(1)"
      : "translateX(-500px) scale(1)",
    transition: "transform .5s",
    transitionDelay: isRendered ? `${index}s` : "0s", // Different delay for each item
  });

  return (
    <div
      className="bg-blue-600 h-full w-full border-t-2 border-testColor1 pt-1 flex justify-center"
      style={{
        opacity: isRendered ? 1 : 0,
        transform: isRendered
          ? "translateX(0) scale(1)"
          : "translateX(-300px) scale(1)",
        transition: "transform .5s",
      }}
    >
      <div className="w-full">
        <div
          onClick={() => {
            setItemSelected("home");
            // setSideBar(false);
          }}
          style={getItemStyle(0)}
        >
          <SideBarItem
            icon={<FaHome />}
            title="Home"
            link="admin/home"
            itemSelected={itemSelected === "home"}
          />
        </div>
        <div
          onClick={() => {
            setItemSelected("jobs");
            // setSideBar(false);
          }}
          style={getItemStyle(0.1)}
        >
          <SideBarItem
            icon={<FaSearch />}
            title="Jobs"
            link="admin/jobs"
            itemSelected={itemSelected === "jobs"}
          />
        </div>
        <div
          onClick={() => {
            setItemSelected("applications");
            // setSideBar(false);
          }}
          style={getItemStyle(0.2)}
        >
          <SideBarItem
            icon={<PiCertificateFill />}
            title="Applications"
            link="admin/applications"
            itemSelected={itemSelected === "applications"}
          />
        </div>
        <div
          onClick={() => {
            setItemSelected("settings");
            // setSideBar(false);
          }}
          style={getItemStyle(0.3)}
        >
          <SideBarItem
            icon={<IoMdSettings />}
            title="Settings"
            link="admin/settings"
            itemSelected={itemSelected === "settings"}
          />
        </div>
        <div
          onClick={() => {
            navigate("/");
          }}
          style={getItemStyle(0.4)}
        >
          <SideBarItem icon={<IoIosLogOut />} title="Logout" />
        </div>
      </div>
    </div>
  );
}
