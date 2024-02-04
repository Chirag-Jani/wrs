import React from "react";
import logo from "../resources/logo.svg";
import { Link, useLocation } from "react-router-dom";
import "../style/NavbarStyle.css";

const Navbar = () => {
  const [active, setActive] = React.useState("/");

  const navItems = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "About Us",
      path: "/about-us",
    },
    {
      label: "Offerings",
      path: "/offerings",
    },
    {
      label: "Pricing",
      path: "/pricing",
    },
    {
      label: "Appointments",
      path: "/appointments",
    },
    {
      label: "Contact Us",
      path: "/contact-us",
    },
  ];

  let location = useLocation();
  React.useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative">
      <div className="bg-transparent absolute z-10 navbar">
        <div className="navbar div py-4 px-5 font-bold tracking-wider">
          <Link to="/" className="m-4">
            <img src={logo} alt="" className="w-14 mx-4 p-0" />
          </Link>
          <div className="mx-4 navbar-items">
            {navItems?.map((item, index) => {
              return (
                <Link
                  key={index}
                  to={item.path}
                  className="nav-item mx-4 text-transparent bg-clip-text bg-gradient-to-b from-[#F68C59] to-[#A80F14] text-xl "
                  onClick={() => {
                    setActive(item.path);
                  }}
                  style={{
                    backgroundImage:
                      active === item.path
                        ? "linear-gradient(to bottom,rgba(1, 162, 213, 1),rgba(1, 108, 203, 1))"
                        : "",
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
