import DisplayTable from "../../components/admin/DisplayTable";
import Pagination from "../../components/admin/Pagination";
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
