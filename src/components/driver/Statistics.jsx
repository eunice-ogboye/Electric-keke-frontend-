import React from "react";
import DoughnutChart from "../xp/DoughnutChart";
import ReBarCharts from "../xp/ReBarCharts";

const Statistics = () => {
  const data = [
    {
      title: "Cash",
      amount: 30,
      color: "#F68D2B",
    },
    {
      title: "In app",
      amount: 40,
      color: "#344BFD",
    },
    {
      title: "Others",
      amount: 30,
      color: "#F4A79D",
    },
  ];

  const trips = [
    { title: "Total Rides", total: 320 },
    { title: "Total Deliveries", total: 480 },
  ];

  return (
    <div className="statistics">
      {/* statistics */}
      <div className="stats">
        <div className="doughnut-stats">
          <div>
            <p className="text-base font-bold">Total Income</p>
            <div className="mt-4 flex items-center">
              <div>
                <p className="text-[0.65rem]">March 2023</p>
                <div className="size-[67px]">
                  <DoughnutChart chartData={data} />
                </div>
              </div>

              <div className="doughnut-stats-info">
                {data.map((item) => {
                  return (
                    <div key={item.title} className="dough-info">
                      <div className="flex items-center gap-2">
                        <span
                          className="dough-info-point"
                          style={{
                            backgroundColor: `${item.color}`,
                          }}
                        />
                        <p className="font-montserrat">{item.title}</p>
                      </div>
                      <p>{item.amount}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <p className="text-2xl font-bold font-montserrat">#40, 000</p>
        </div>

        <div className="trips">
          {trips.map((item) => {
            return (
              <div key={item.title} className="trip">
                <p className="text-sm lg:text-base font-montserrat">
                  {item.title}
                </p>
                <p className="text-neutral-0 font-bold text-2xl font-josefin">
                  {item.total}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      {/* weekly stats */}
      <div className="performance-board">
        <div className="flex flex-col justify-between items-center">
          <p className="font-bold">Ride & Delivery Performance</p>

          <div className="h-[158px] w-[295px]">
            {/* <BarChart /> */}
            <ReBarCharts />
          </div>
          <div className="w-[252px] flex items-center gap-1">
            <p className="text-2xl font-bold">30%</p>

            <p className="text-xs text-neutral">
              Your performance for this is 30% better compare to last week
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
