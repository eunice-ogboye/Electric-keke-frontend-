// import PieChart from "../shared/PieChart";
import Experimental from "../shared/experimental/Experimental";

const Analytics = () => {
  return (
    <div className="mt-8 flex items-stretch gap-x-7">
      <div className="w-7/12 max-w-[772px] border p-5 min-h-[371px]">
        <p className="text-xl font-medium">Analytics</p>
      </div>

      {/* <PieChart
        data={{
          rides: { color: "transparent", digit: 100000 },
          deliveries: { color: "#FE981C", digit: 800000 },
          users: { color: "#E56200", digit: 3000000 },
        }}
      /> */}
      {/* experimental pie */}
      <Experimental
        data={{
          riders: { color: "transparent", cut: 20 },
          jose: { color: "blue", cut: 10 },
          user: { color: "indigo", cut: 20 },
          passengers: { color: "orange", cut: 30 },
          emem: { color: "green", cut: 20 },
        }}
      />
    </div>
  );
};

export default Analytics;
