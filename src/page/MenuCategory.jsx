import { Link } from "react-router-dom";
import Cover from "../shared/Cover";
import MenuItem from "../shared/MenuItem";


const MenuCategory = ({ items, title, img }) => {
  return (
    <div>
      {title && <Cover img={img} title={title} />}
      <div className="flex flex-col justify-center  items-center">
        <div className="grid md:grid-cols-2 gap-6 my-20 w-10/12 ">
          {items.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
        <Link to={`/order/${title}`}>
          <button className="btn btn-outline uppercase border-0 border-b-4  text-center my-8 font-medium">
            ORDER YOUR FAVOURITE FOOD
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
