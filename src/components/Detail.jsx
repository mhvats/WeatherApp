import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import OpacityIcon from "@mui/icons-material/Opacity";
import WaterIcon from "@mui/icons-material/Water";
export const Detail = () => {
  return (
    <div className="flex flex-row justify-between items-center my-2">
      <div className="text-red-900">
        <WbSunnyIcon />
      </div>
      <div className="text-5xl">19°</div>
      <div className="  text-xs">
        <div className="flex  items-center">
          <DeviceThermostatIcon />
          <p>Real fell: 19°</p>
        </div>
        <div className="flex  items-center">
          <OpacityIcon />
          <p>Humidity : 43%</p>
        </div>
        <div className="flex  items-center">
          <WaterIcon />
          <p>Wind : 2km/h</p>
        </div>
      </div>
    </div>
  );
};
