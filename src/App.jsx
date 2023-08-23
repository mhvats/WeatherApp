import { Location } from "./components/Location";
import { SearchBar } from "./components/SearchBar";
export const App = () => {
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-yellow-100 h-fit shadow-xl shadow-gray-400">
      <Location />
      <SearchBar />
    </div>
  );
};
