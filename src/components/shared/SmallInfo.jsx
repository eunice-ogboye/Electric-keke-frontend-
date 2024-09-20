import ArrDown from "../../assets/svg/ArrDown";
import React, { useState } from "react";
import { getItemFromLs } from "../../lib/ls";

const SmallInfo = ({ admin }) => {
  const [user] = useState(getItemFromLs("user"));
  return (
    <div className="admin-info">
      <div className="flex items-center gap-1">
        <div className="size-9 rounded-full">
          <img
            src={user.photo || "/persons/rider1.png"}
            alt={user?.full}
            className="size-full rounded-full"
          />
        </div>
        <div>
          <p className="font-bold text-sm">{user.fullname}</p>
          <p className="text-sm">
            {admin ? "Admin" : `@${user?.nickname || "susu"}`}
          </p>
        </div>
      </div>

      <div>
        <ArrDown />
      </div>
    </div>
  );
};

export default SmallInfo;
