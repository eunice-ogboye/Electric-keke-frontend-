import Btn from "./btn/Btn";

const SearchBar = ({ className }) => {
  return (
    <div className={className}>
      <input
        type="text"
        placeholder="search for help..."
        className="w-9/12 pl-4 outline-none border-none font-josefin placeholder:italic"
      />
      <div className="w-3/12">
        <Btn text="Search" styling="w-full btn--hero btn--primary" />
      </div>
    </div>
  );
};

export default SearchBar;
