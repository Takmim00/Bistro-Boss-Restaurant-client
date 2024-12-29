import SectionTitle from "../components/SectionTitle";
import useMenu from "../hooks/useMenu";
import MenuItem from "../shared/MenuItem";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <section className="w-11/12 mx-auto my-6 flex flex-col items-center">
      <SectionTitle
        heading={"Check it out"}
        subHeading={"FROM OUR MENU"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-6">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <button className="btn btn-outline uppercase border-0 border-b-4  text-center my-8 font-medium">
        View full menu
      </button>
    </section>
  );
};

export default PopularMenu;
