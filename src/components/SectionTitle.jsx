



const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="w-3/12 mx-auto text-center my-4">
            <p className="text-[#D99904] mb-3 italic text-xl">---{heading}---</p>
            <h3 className="text-4xl border-y-4  mb-4 py-4">{subHeading}</h3>
        </div>
    );
};

export default SectionTitle;