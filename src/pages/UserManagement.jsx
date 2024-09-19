import DisplayTable from "../components/Admin/DisplayTable";
import Pagination from "../components/Admin/Pagination";
import { useOutletContext } from "react-router-dom";

const UserManagement = () => {
  const { contentsToDisplay } = useOutletContext();
  console.log(contentsToDisplay);
  return (
    <div className="mt-8">
      <DisplayTable contentsToDisplay={contentsToDisplay} contentType="user" />
      <Pagination />
    </div>
  );
};

export default UserManagement;
