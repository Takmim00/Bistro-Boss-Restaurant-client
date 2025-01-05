import { useQuery } from "@tanstack/react-query";
import { RiDeleteBin6Line } from "react-icons/ri";
import SectionTitle from "../components/SectionTitle";

import { FaUsers } from "react-icons/fa6";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  const handleDeleteUser = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is an Admin Now!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  return (
    <div className="bg-gray-100 min-h-screen">
      <SectionTitle
        heading={"How many??"}
        subHeading={"MANAGE ALL USERS"}
      ></SectionTitle>
      <div className="p-8 bg-white w-9/12 mx-auto rounded-lg">
        <div className="flex justify-between items-center mb-6">
          <div className="text-lg font-bold">Total email: {users.length} </div>
        </div>
        <table className="w-full border-collapse bg-white rounded-lg shadow">
          <thead>
            <tr className="bg-yellow-600   text-white">
              <th className="p-4 text-left"></th>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Role</th>
              <th className="p-4 ">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={user._id} className="border-t">
                <td className="p-4">{i + 1}</td>

                <td className="p-4 text-gray-500">{user.name}</td>
                <td className="p-4 text-gray-500">{user.email}</td>
                <td className="p-4 text-gray-500">
                  {user.role === "admin" ? (
                    "Admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="p-2 bg-[#D1A054] text-white rounded-lg hover:bg-[#9a7235]"
                    >
                      <FaUsers />
                    </button>
                  )}
                </td>
                <td className="p-4 text-center">
                  <button
                    onClick={() => handleDeleteUser(user)}
                    className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                  >
                    <RiDeleteBin6Line />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
