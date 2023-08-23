export const Location = () => {
    const cities = ["Muzaffarpur", "Patna", "Hajipur", "Darbhanga"];
  
    return (
      <div className="flex flex-row justify-center align-middle ">
        {cities.map((city, index) => (
          <p className="text-white  mx-8 text-xl cursor-pointer"key={index}>{city}</p>
        ))}
      </div>
    );
  };
  