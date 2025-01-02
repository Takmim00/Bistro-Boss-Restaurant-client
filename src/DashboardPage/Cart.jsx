import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";
import SectionTitle from "../components/SectionTitle";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useCart from "../hooks/useCart";
const Cart = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const axiosSecure = useAxiosSecure();

  const handleDelete = (id) => {
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
        axiosSecure.delete(`/carts/${id}`).then((res) => {
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

  return (
    <div className="bg-gray-100 min-h-screen">
      <SectionTitle
        heading={"My Cart"}
        subHeading={"WANNA ADD MORE?"}
      ></SectionTitle>
      <div className="p-8 bg-white w-9/12 mx-auto rounded-lg">
        <div className="flex justify-between items-center mb-6">
          <div className="text-lg font-bold">Total orders: {cart.length} </div>
          <div className="text-lg font-bold">
            Total price: <span className="">${totalPrice}</span>
          </div>
          <button className="px-4 py-2 bg-yellow-600 text-white font-semibold rounded-lg">
            Pay
          </button>
        </div>
        <table className="w-full border-collapse bg-white rounded-lg shadow">
          <thead>
            <tr className="bg-yellow-600   text-white">
              <th className="p-4 text-left"></th>
              <th className="p-4 text-left">ITEM IMAGE</th>
              <th className="p-4 text-left">ITEM NAME</th>
              <th className="p-4 text-left">PRICE</th>
              <th className="p-4 ">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, i) => (
              <tr key={item._id} className="border-t">
                <td className="p-4">{i + 1}</td>
                <td className="p-4">
                  <img
                    className=" h-16 rounded-lg object-cover"
                    src={item.image}
                    alt=""
                  />
                </td>
                <td className="p-4 text-gray-500">{item.name}</td>
                <td className="p-4 text-gray-500">${item.price}</td>
                <td className="p-4 text-center">
                  <button
                    onClick={() => handleDelete(item._id)}
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

export default Cart;
