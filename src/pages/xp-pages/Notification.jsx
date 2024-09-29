import Notify from "../../components/xp/Notify";
import notifications from "../../mock-data/notifications";

const Notification = () => {
  return (
    <section className="home-pad mobile:pt-2 tablet:pt-9">
      <h2 className="font-bold text-center text-[2rem]">Notification</h2>

      <div className="tablet:max-w-[60%] space-y-3 mobile:mt-2 tablet:mt-[60px]">
        {notifications.map((item) => {
          return <Notify key={item.title} {...item} />;
        })}
      </div>
    </section>
  );
};

export default Notification;
