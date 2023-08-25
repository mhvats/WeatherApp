export const HourlyForecast = () => {
  const data = [
    {
      time: "01:00 PM",
      ico: "icon",
      temp: "14°",
    },
    {
      time: "01:00 PM",
      ico: "icon",
      temp: "14°",
    },
    {
      time: "01:00 PM",
      ico: "icon",
      temp: "14°",
    },
    {
      time: "01:00 PM",
      ico: "icon",
      temp: "14°",
    },
    {
      time: "01:00 PM",
      ico: "icon",
      temp: "14°",
    },
  ];
  const renderData = data.map((item) => {
    return (
      <div className="flex flex-col w-20 h-20  mx-5 items-center justify-between text-xs">
        <p className="">{item.time}</p>
        <p>{item.ico}</p>
        <p>{item.temp}</p>
      </div>
    );
  });
  return (
    <div className="">
      <p>HOURLY FORECAST</p>
      <hr className="my-1"></hr>
      <div className="flex">{renderData}</div>
    </div>
  );
};
