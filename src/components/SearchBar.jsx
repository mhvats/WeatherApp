import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import SearchIcon from "@mui/icons-material/Search";
export const SearchBar = () => {
  return (
    <div className="my-6 flex flex-row justify-center">
      <div className="flex flex-row w-3/4 items-center space-x-4 justify-center">
        <input
          placeholder="search for city...."
          className="capitalize placeholder:lowercase text-xl font-light p-2 w-full shadow-xl focus:outline-none"
        ></input>
        <SearchIcon  className="text-white cursor-pointer transition ease-out hover:scale-125"/>
        <LocationSearchingIcon className="text-white cursor-pointer transition ease-out hover:scale-125" />
      </div>
    </div>
  );
};
