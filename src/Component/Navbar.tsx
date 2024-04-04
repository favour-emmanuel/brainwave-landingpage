import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

const Navbar = () => {
  const navlinks = ["Demos", "Pages", "Support", "Contact"];
  const [nav, setNav] = useState(false);

  return (
    <div className="px-8 pt-4 flex justify-between items-center mx-auto max-w-[1640px]">
      <h1 className="font-bold text-base">
        <a href="/">Brainwave.io</a>
      </h1>
      <ul className="gap-6 items-center lg:flex hidden">
        {navlinks.map((navlink) => (
          <li className="text-sm">
            <a href="/">{navlink}</a>
          </li>
        ))}
      </ul>
      <button className="max-w-[11rem] py-2.5 px-2 rounded-md bg-appblue text-appwhite hidden lg:block">
        <a href="#" className="text-sm">
          Get started for free
        </a>
      </button>

      <div className=" lg:hidden ">
        {nav ? (
          <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
        ) : (
          ""
        )}
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-full max-w-[18rem] bg-appwhite md:max-w-[29rem] py-3 px-5 h-screen bg-appBackground z-10 duration-300"
              : "fixed left-[-100%] top-0 min-h-[90vh] z-10 duration-300"
          }
        >
          <div className="">
            <h1 className="font-bold text-base">
              <a href="/">Brainwave.io</a>
            </h1>
            <span className="absolute right-4 top-4 cursor-pointer font-bold text-lg text-appsecondary">
              {" "}
              <Icon
                onClick={() => {
                  setNav(false);
                }}
                icon="icon-park-outline:close"
              />
            </span>
          </div>
          <ul className=" flex flex-col justify-between gap-y-5 mt-8 text-appsecondary">
            {navlinks.map((navlink) => (
              <li className="text-sm">
                <a href="/">{navlink}</a>
              </li>
            ))}
          </ul>
          <button className="max-w-[11rem] py-2.5 px-2 rounded-md bg-appblue text-appwhite fixed bottom-60">
            <a href="#" className="text-sm">
              Get started for free
            </a>
          </button>
        </div>
      </div>
      <div className="lg:hidden ">
        <span className="text-base cursor-pointer">
          {nav ? (
            <Icon
              onClick={() => {
                setNav(false);
              }}
              icon="icon-park-outline:close"
              className="text-xl"
            />
          ) : (
            <Icon
              onClick={() => {
                setNav(true);
              }}
              icon="icon-park-outline:hamburger-button"
              className="text-xl"
            />
          )}
        </span>
      </div>
    </div>
  );
};

export default Navbar;
