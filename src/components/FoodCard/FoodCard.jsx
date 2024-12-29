

const FoodCard = ({item}) => {
    const {image, price, recipe, name} = item
  return (
    <div className="card bg-base-100 shadow-md rounded-md">
      <figure>
        <img
          src={image}
          alt="Shoes"
          className="w-full"
        />
      </figure>
        <p className="absolute right-0 mr-4 mt-4 px-3 py-1 bg-black text-white">${price}</p>
      <div className="card-body">
        <h2 className="card-title text-center items-center">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
        <button className="btn btn-outline text-[#BB8506] uppercase border-0 border-b-4   text-center my-8 font-medium">
        Add to cart
        </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
