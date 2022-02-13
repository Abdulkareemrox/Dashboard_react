import "./styles.css";
import Home from "./pages/Home";
import Table from "./pages/table";
import SideBar from "./pages/sideBar";
import Dashboard from "./pages/Dashboard";
import Map from "./pages/map";
import Grid from "@mui/material/Grid";


export default function App() {
  return (
    <>
      <SideBar />
      <Grid container spacing={2} style={{padding: "0px 50px"}}>
        <Grid item xs={12}>
          <Dashboard />
        </Grid>
        <Grid item xs={12}>
          <Map />
        </Grid>
        <Grid item xs={12}>
          <Table />
        </Grid>
        <Grid item xs={12}>
          <Home />
        </Grid>
      </Grid>
    </>
  );
}
