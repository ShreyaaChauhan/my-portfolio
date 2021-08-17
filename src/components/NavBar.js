import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <header className="nav-bg-color ">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inflex-flex items-center py-6 px-3 mr-4 text-gray-50 hover:text-gray-50 text-4xl font-bold cursive tracking-widest"
          >
            Shreya
          </NavLink>
          <NavLink
            to="/post"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-200 hover:text-yellow-900 hover:bg-gray-50 nav-tabs font-bold"
            activeClassName="text-yellow-900 bg-gray-50"
          >
            Blog Post
          </NavLink>
          <NavLink
            to="/project"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-200 hover:text-yellow-900 hover:bg-gray-200 nav-tabs font-bold"
            activeClassName="text-yellow-900 bg-gray-50"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about "
            className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-200 hover:text-yellow-900 hover:bg-gray-200 nav-tabs font-bold"
            activeClassName="text-yellow-900 bg-gray-50"
          >
            About Me
          </NavLink>
        </nav>
        <div className= "inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://github.com/ShreyaaChauhan"
            className="mr-4"
            target="_blank"
            bgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/shreya-chauhan-256092102/"
            className="mr-4"
            target="_blank"
            bgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.instagram.com/___shreyachauhan___/"
            className="mr-4"
            target="_blank"
            bgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.facebook.com/shreyachauhan13/"
            className="mr-4"
            target="_blank"
            bgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
}
