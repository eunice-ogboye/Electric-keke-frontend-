import Bell from "../assets/svg/Bell";
import SearchIcon from "../assets/svg/SearchIcon";
import Logo from "../components/Logo";

const Admin = () => {
  return (
    <section>
      <header className="border flex items-center justify-between h-[104px] px-20">
        <Logo className="w-[84px] h-[56px]" />
        <div className="flex items-center justify-between gap-x-9">
          <div className="size-9 flex-center">
            <SearchIcon />
          </div>
          <div className="size-9 flex-center">
            <Bell />
          </div>

          <div className="w-[150px] p-1 border rounded-full flex items-center justify-between">
            <div className="flex items-center gap-1">
              <div className="size-9 rounded-full">
                <img
                  src="/persons/rider1.png"
                  alt="rider"
                  className="size-full rounded-full"
                />
              </div>
              <div>
                <p className="font-bold text-sm">John Doe</p>
                <p className="text-sm">Admin</p>
              </div>
            </div>

            <div>
              <img src="/admin-down.svg" alt="down" />
            </div>
          </div>
        </div>
      </header>
      <h2>Admin Page Still in progress</h2>
    </section>
  );
};

export default Admin;
