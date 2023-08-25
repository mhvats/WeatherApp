import { DailyForecast } from "./components/DailyForecast";
import { Detail } from "./components/Detail";
import { HourlyForecast } from "./components/HourlyForecast";
import { Location } from "./components/Location";
import { MoreDetail } from "./components/MoreDetail";
import { SearchBar } from "./components/SearchBar";
import { TimeStamp } from "./components/TimeStamp";
export const App = () => {
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-yellow-100 h-fit shadow-xl shadow-gray-400">
      <Location />
      <SearchBar />
      <TimeStamp />
      <Detail />
      <MoreDetail />
      <HourlyForecast />
      <DailyForecast />
    </div>
  );
};
