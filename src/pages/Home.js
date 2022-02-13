import React, { useState, useEffect } from "react";
import { fetchUsers, selectedRecord } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import { DataGrid } from "@mui/x-data-grid";
import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";

const Home = () => {
  const dispatch = useDispatch();
  const usersStore = useSelector((state) => state.users);
  const { loading, users } = usersStore;

  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    { field: "title", headerName: "Title", sortable: true, width: 400 },
    { field: "price", headerName: "Price", sortable: true, width: 100 },
    {
      field: "description",
      headerName: "Description",
      sortable: true,
      width: 550,
    },
    {
      field: "category",
      headerName: "Category",
      sortable: true,
      width: 130,
    },

    {
      field: "delete",
      headerName: "Delete",
      width: 100,
      renderCell: () => (
        <strong>
          <Button
            variant="contained"
            size="small"
            style={{
              marginLeft: 16,
              background: "red",
              color: "#fff",
              padding: 5,
              borderRadius: 5,
            }}
          >
            Delete
          </Button>
        </strong>
      ),
    },
  ];

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  let data = [
    {
      title: "title",
      price: 23,
    },
  ];

  const [rows, setRows] = useState(users);
  const [searchText, setSearchText] = React.useState("");

  function escapeRegExp(value) {
    return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  }

  const requestSearch = (searchValue) => {
    setSearchText(searchValue);
    const searchRegex = new RegExp(escapeRegExp(searchValue), "i");
    const filteredRows = users.filter((row) => {
      return Object.keys(row).some((field) => {
        return searchRegex.test(row[field].toString());
      });
    });
    setRows(filteredRows);
  };

  function currentlySelected(params) {
    const value = params.colDef.field;
    if (!(value === "select" || value === "delete")) {
      return;
    }
    if (value === "delete") {
      const selectedIDs = new Set([params.row.id]);
      const selectedRows = rows.filter((row) => !selectedIDs.has(row.id));
      setRows(selectedRows);
    }
  }

  React.useEffect(() => {
    setRows(users);
  }, [users]);

  function QuickSearchToolbar(props) {
    return (
      <div style={{ display: "flex", margin: 10 }}>
        <h1>Records</h1>

        <TextField
          variant="outlined"
          style={{ marginLeft: "auto" }}
          value={props.value}
          onChange={props.onChange}
          placeholder="Search…"
          InputProps={{
            endAdornment: <SearchIcon fontSize="small" />,
            startAdornment: (
              <IconButton
                title="Clear"
                aria-label="Clear"
                size="small"
                style={{ visibility: props.value ? "visible" : "hidden" }}
                onClick={props.clearSearch}
              >
                <ClearIcon fontSize="small" />
              </IconButton>
            ),
          }}
        />
      </div>
    );
  }

  return (
    <>
      {loading ? (
        <div className="overlay">
          <div className="overlay__inner">
            <div className="overlay__content">
              <span className="spinner"></span>
            </div>
          </div>
        </div>
      ) : (
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            components={{ Toolbar: QuickSearchToolbar }}
            rows={rows}
            columns={columns}
            checkboxSelection
            componentsProps={{
              toolbar: {
                value: searchText,
                onChange: (event) => requestSearch(event.target.value),
                clearSearch: () => requestSearch(""),
              },
            }}
            onCellClick={currentlySelected}
            onSelectionModelChange={(ids) => {
              const selectedIDs = new Set(ids);
              const selectedRows = rows.filter((row) =>
                selectedIDs.has(row.id)
              );
              dispatch(selectedRecord(selectedRows));
            }}
            {...rows}
          />
        </div>
      )}
    </>
  );
};

export default Home;
