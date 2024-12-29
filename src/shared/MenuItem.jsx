

const MenuItem = ({item}) => {
    const {image, price, recipe, name} = item
    return (
        <div className="flex space-x-4">
            <img className="w-[100px] rounded-r-full rounded-b-full" src={image} alt="" />
            <div className="space-y-2">
                <h3 className="uppercase text-2xl">{name}--------</h3>
                <p className="text-gray-400">{recipe}</p>
            </div>
            <p className="text-[#BB8506] text-xl">${price}</p>
        </div>
    );
};

export default MenuItem;