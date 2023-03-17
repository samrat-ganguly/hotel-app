import "./Sidebar.css";

import { GiChessKing } from "react-icons/gi";
import { AiFillPieChart } from "react-icons/ai";
import { MdEventAvailable, MdOutlineBedroomChild } from "react-icons/md";
import { FaUserPlus, FaUserMinus } from "react-icons/fa";
import { BiFoodMenu, BiReceipt } from "react-icons/bi";

import React from "react";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="title">
        <GiChessKing />
        <h2>Hoteleasy</h2>
      </div>

      <ul>
        <li>
          <AiFillPieChart />
          <p>Overview</p>
        </li>

        <li>
          <AiFillPieChart />
          <p>Reservation</p>
        </li>

        <li>
          <MdEventAvailable />
          <p>Availability</p>
        </li>

        <li>
          <FaUserPlus />
          <p>Check in</p>
        </li>

        <li>
          <FaUserMinus />
          <p>Check out</p>
        </li>

        <li>
          <MdOutlineBedroomChild />
          <p>Room Change</p>
        </li>

        <li>
          <BiFoodMenu />
          <p>Food Menu</p>
        </li>

        <li>
          <BiReceipt />
          <p>Biling</p>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
