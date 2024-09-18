import Notify from "../components/Notify";
import notifications from "../mock-data/notifications";

const Notification = () => {
  return (
    <section className="p-5 mobile:p-14 my-dell:px-[120px]">
      <h2 className="font-bold text-center">Notification & Alert</h2>
      <div className="my-dell:max-w-[60%] space-y-[35px]">
        {notifications.map((item) => {
          return <Notify key={item.title} {...item} />;
        })}
      </div>
    </section>
  );
};

export default Notification;
