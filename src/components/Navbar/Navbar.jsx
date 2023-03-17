import React, { useState } from "react";

import { IoIosArrowDown } from "react-icons/io";

import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="Navbar">
      <h4>Josephine</h4>
      <button
        onClick={() => setOpen(!open)}
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
      >
        <IoIosArrowDown />
      </button>

      {/* If open is true show your <div /> */}
      {open && (
        <div
          className="popup"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <ul>
            <li>Profile</li>
            <li>Logout</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
