import * as React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Grid
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function MediaCard() {
  const values = ["Moving", "Stopped", "Active", "Inactive", "service"];
  return (
    <div>
       <h1>Dashboard</h1>
    <div className="cards">
      {values.map((item) => {
        return (
          <div className="dasboard-card">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia height="20" width="30" />
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <div
                      style={{
                        color: "red",
                        position: "absolute",
                        top: 0,
                        left: 0,
                      }}
                    >
                      <ArrowForwardIcon />
                    </div>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography style={{ color: "red" }}>{item}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography style={{ color: "red" }}>70%</Typography>
                  </Grid>
                  <Grid item xs={6} className="Number">
                    <Typography>264</Typography>
                  </Grid>
                  <Grid item xs={6} className="letter">
                    <Typography>View Dashboard</Typography>
                  </Grid>
                  <Grid item xs={6} className="letter">
                    <Typography>View Dashboard</Typography>
                  </Grid>
                </Grid>
              </CardContent>
              <CardActions></CardActions>
            </Card>
          </div>
        );
      })}
    </div>
    </div>

  );
}
