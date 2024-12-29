import featuredImg from "../assets/home/featured.jpg";
import SectionTitle from "../components/SectionTitle";
import './Featured.css'

const Featured = () => {
  return (
    <div className="featured-item py-8 text-white my-16 bg-fixed bg-opacity-80 bg-slate-500 ">
      <SectionTitle heading={"Check it out"} subHeading={"Featured item"} />
      <div className="md:flex justify-center items-center w-8/12 mx-auto py-8 gap-8">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="">
          <p>MARCH 20,2023</p>
          <p className="uppercase">Where ca i get some?</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium fugit quod tempora aliquam, impedit fuga autem, officia laborum nihil, illum laudantium voluptate delectus repellat quia.</p>
          <button className="btn btn-outline uppercase border-0 border-b-4 text-white border-white">Read more</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
