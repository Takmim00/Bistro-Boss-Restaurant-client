import { FaBook, FaCartShopping, FaUsers, FaUtensils } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { IoMenu } from "react-icons/io5";
import { MdShoppingBag } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import useCart from "../hooks/useCart";

const Dashboard = () => {
  const [cart] = useCart()
  return (
    <div className="flex">
       {/* Sidebar */}
       <div className="w-64 min-h-screen bg-[#D1A054]  flex flex-col">
        <div className="p-4">
          <h1 className="text-xl font-bold">Bistro Boss</h1>
          <p className="text-sm tracking-wide">RESTAURANT</p>
        </div>
        <ul className="menu p-4 space-y-2">
          <li>
            <NavLink
              to="/dashboard/admin-home"
              className={({ isActive }) =>
                isActive ? "bg-[#A66E3A] p-2 rounded" : "hover:bg-[#A66E3A] p-2 rounded"
              }
            >
                <AiFillHome />
               Admin Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/add-items"
              className={({ isActive }) =>
                isActive ? "bg-[#A66E3A] p-2 rounded" : "hover:bg-[#A66E3A] p-2 rounded"
              }
            >
              <FaUtensils />Add Items
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/cart"
              className={({ isActive }) =>
                isActive ? "bg-[#A66E3A] p-2 rounded" : "hover:bg-[#A66E3A] p-2 rounded"
              }
            >
                <FaCartShopping/>
               My Items ({cart.length})
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/manage-bookings"
              className={({ isActive }) =>
                isActive ? "bg-[#A66E3A] p-2 rounded" : "hover:bg-[#A66E3A] p-2 rounded"
              }
            >
                <FaBook />
               Manage Bookings
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/all-users"
              className={({ isActive }) =>
                isActive ? "bg-[#A66E3A] p-2 rounded" : "hover:bg-[#A66E3A] p-2 rounded"
              }
            >
              <FaUsers />All Users
            </NavLink>
          </li>
          <hr className="my-4 border-t border-white/20" />
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "bg-[#A66E3A] p-2 rounded" : "hover:bg-[#A66E3A] p-2 rounded"
              }
            >
              <AiFillHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/menu"
              className={({ isActive }) =>
                isActive ? "bg-[#A66E3A] p-2 rounded" : "hover:bg-[#A66E3A] p-2 rounded"
              }
            >
              <IoMenu /> Menu
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/shop"
              className={({ isActive }) =>
                isActive ? "bg-[#A66E3A] p-2 rounded" : "hover:bg-[#A66E3A] p-2 rounded"
              }
            >
              <MdShoppingBag /> Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/contact"
              className={({ isActive }) =>
                isActive ? "bg-[#A66E3A] p-2 rounded" : "hover:bg-[#A66E3A] p-2 rounded"
              }
            >
              <IoIosMail /> Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
