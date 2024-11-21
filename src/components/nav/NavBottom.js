import { GraduationCap, Handshake, Home, Plus, User, Users } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function BottomNavigation() {
  const location = useLocation();
  return (
    <>
      <div className="z-50 bg-white flex justify-around items-center max-w-[430px] py-5 border-t-[1px] fixed bottom-0 w-full text-[#707170]">
        <Link
          to="/home"
          className={location.pathname === "/home" ? "text-[#0288d1]" : ""}
        >
          <Home />
        </Link>
        <Link
          to="/jurusan"
          className={
            location.pathname.startsWith("/jurusan")
              ? "text-[#0288d1]"
              : ""
          }
        >
          <GraduationCap/>
        </Link>
        <Link
          to="/himpunan"
          className={location.pathname === "/himpunan" ? "text-[#0288d1]" : ""}
        >
          <Users />
        </Link>
        <Link
          to="/profile"
          className={location.pathname === "/profile" ? "text-[#0288d1]" : ""}
        >
          <User />
        </Link>
      </div>
    </>
  );
}