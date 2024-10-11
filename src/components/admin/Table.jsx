import { motion } from "framer-motion";
import {
  user_management_tablehead,
  finance_management_tablehead,
} from "../../constants";

export const TableContent = ({
  id,
  transaction_id,
  name,
  email,
  img,
  created,
  date,
  rides,
  status,
  delay,
  userContent,
}) => {
  const UserTableContent = () => {
    const userTableContentClasses = user_management_tablehead.map(
      (item) => item.tableClass
    );

    return (
      <motion.div
        initial={{ x: 200, y: -20, opacity: 0 }}
        animate={{
          x: 0,
          y: 0,
          opacity: 1,
          transition: { duration: delay * 0.83 * 0.037 },
        }}
        className="grid grid-cols-9 place-items-center py-4 border"
      >
        {userTableContentClasses.map((item, index) => {
          return (
            <div
              key={item + index}
              className={`${item} ${index === 3 && "flex-center gap-2"}`}
            >
              {index === 0 && <p className="font-normal text-base">{id}</p>}

              {index === 1 && (
                <>
                  <div className="flex items-center gap-x-2">
                    <div className="size-12 rounded-full bg-neutral-500 flex-center">
                      {img ? (
                        <img src={img} alt={name} />
                      ) : (
                        <p className="text-white">{name[0]}</p>
                      )}
                    </div>

                    <div>
                      <p className="font-medium">{name}</p>
                      <p className="text-sm">{email}</p>
                    </div>
                  </div>
                </>
              )}

              {index === 2 && <p className="">{created}</p>}

              {index === 3 && (
                <>
                  <span
                    className={`size-3 rounded-full block ${
                      status === "active" ? "bg-basic" : "bg-red-500"
                    }`}
                  />
                  <p>{status}</p>
                </>
              )}

              {index === 4 && <img src="/admin-user.svg" alt={name} />}
            </div>
          );
        })}
      </motion.div>
    );
  };

  const FinanceTableContent = () => {
    const financeTableContentClasses = finance_management_tablehead.map(
      (item) => item.tableClass
    );
    return (
      <motion.div
        initial={{ x: 200, y: -20, opacity: 0 }}
        animate={{
          x: 0,
          y: 0,
          opacity: 1,
          transition: { duration: delay * 0.83 * 0.037 },
        }}
        className="grid grid-cols-9 place-items-center py-4 border"
      >
        {financeTableContentClasses.map((item, index) => {
          return (
            <div key={item + index} className={item}>
              {index === 0 && (
                <p className="font-normal text-base">{transaction_id}</p>
              )}
              {index === 1 && (
                <p
                  className={`${
                    status === "Complete" ? "text-basic" : "text-warning"
                  }`}
                >
                  {status}
                </p>
              )}
              {index === 2 && (
                <>
                  <div className="flex items-center gap-x-2">
                    <div className="size-12 rounded-full bg-neutral-500 flex-center">
                      {img ? (
                        <img src={img} alt={name} />
                      ) : (
                        <p className="text-white">{name[0]}</p>
                      )}
                    </div>

                    <div>
                      <p className="font-medium">{name}</p>
                      <p className="text-sm">{email}</p>
                    </div>
                  </div>
                </>
              )}
              {index === 3 && <p className="">{date}</p>}
              {index === 4 && <p className="">#{rides}</p>}
              {index === 5 && <img src="/admin-user.svg" alt={name} />}
            </div>
          );
        })}
      </motion.div>
    );
  };

  return userContent ? UserTableContent() : FinanceTableContent();
};

const Table = ({ tableheadContent }) => {
  return (
    <div className="grid grid-cols-9 h-14 place-items-center">
      {tableheadContent.map((item) => {
        return (
          <div key={item.title} className={item.tableClass}>
            <p className="font-semibold">{item.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Table;
