import { Helmet } from "react-helmet-async";
import menuImg from "../assets/menu/banner3.jpg";
import dessertImg from "../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../assets/menu/pizza-bg.jpg";
import saladImg from "../assets/menu/salad-bg.jpg";
import soupImg from "../assets/menu/soup-bg.jpg";
import SectionTitle from "../components/SectionTitle";
import useMenu from "../hooks/useMenu";
import Cover from "../shared/Cover";
import MenuCategory from "./MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss || Menu</title>
      </Helmet>
      <Cover img={menuImg} title={"our menu"} />
      <SectionTitle
        heading={"Don't miss"}
        subHeading={"Today's offer"}
      ></SectionTitle>
      {/* offered */}
      <MenuCategory items={offered}></MenuCategory>
      {/* dessert */}
      <MenuCategory
        items={dessert}
        title="Dessert"
        img={dessertImg}
      ></MenuCategory>
      {/* pizza */}
      <MenuCategory items={pizza} title="Pizza" img={pizzaImg}></MenuCategory>
      {/* salad */}
      <MenuCategory
        items={salad}
        title="Salad"
        img={saladImg}
      ></MenuCategory>
      {/* soup */}
      <MenuCategory
        items={soup}
        title="Soup"
        img={soupImg}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
