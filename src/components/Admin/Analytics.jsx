import React from "react";

const Analytics = () => {
  return (
    <div className="mt-8 flex gap-x-7">
      <div className="w-7/12 max-w-[772px] border p-5 h-[371px]">
        <p className="text-xl font-medium">Analytics</p>
      </div>

      <div className="w-5/12 max-w-[469px] aspect-square border p-5">
        <div className="flex items-center justify-between">
          <p className="text-xl font-medium">Earnings</p>
          <div>
            <img src="/users/three-dots.svg" alt="dots" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
