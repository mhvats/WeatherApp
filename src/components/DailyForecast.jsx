export const DailyForecast = () => {
  const data = [
    {
      time: "SUN",
      ico: "icon",
      temp: "14°",
    },
    {
      time: "MON",
      ico: "icon",
      temp: "14°",
    },
    {
      time: "TUE",
      ico: "icon",
      temp: "14°",
    },
    {
      time: "WED",
      ico: "icon",
      temp: "14°",
    },
    {
      time: "THU",
      ico: "icon",
      temp: "14°",
    },
  ];
  const renderData = data.map((item) => {
    return (
      <div className="flex flex-col w-20 h-20 mx-5 items-center justify-between text-xs">
        <p className="">{item.time}</p>
        <p>{item.ico}</p>
        <p>{item.temp}</p>
      </div>
    );
  });
  return (
    <div className="">
      <p>Daily FORECAST</p>
      <hr className="my-1"></hr>
      <div className="flex">{renderData}</div>
    </div>
  );
};
