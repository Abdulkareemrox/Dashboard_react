import { useEffect } from "react";
import { fetchUsers } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import { DataGrid } from '@mui/x-data-grid';


const Home = () => {
  const dispatch = useDispatch();
  const usersStore = useSelector((state) => state.users.selectRecord);

  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    { field: "title", headerName: "Title",sortable: true, width: 400 },
    { field: "price", headerName: "Price",sortable: true, width: 100 },
    { field: "description", headerName: "Description",sortable: true, width: 300 },
    {
      field: "category",
      headerName: "Category",
      sortable: true,
      width: 130,
    }
  ];
  

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <>
      <div><h1>Selected Records</h1></div>
       <div className="selectedRecords" style={{ height: 400, width: '70%' }}>
      <DataGrid
        rows={usersStore}
        columns={columns}
        pdescriptionSize={5}
        rowsPerPdescriptionOptions={[5]}
      />
    </div>
    </>
  );
};

export default Home;
