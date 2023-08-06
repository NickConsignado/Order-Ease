import React from "react";
import Typography from "@mui/material/Typography";
import classes from "../App.module.scss";
import { Grid, Box, Card } from "@mui/material";
import MixedChart from "./MixedChart";
import PieChart from "./PieChart";

const Charts = () => {
  return (
    <>
      <Card>
        <div>
          <Typography
            variant="h5"
            component="div"
            className={classes.chart_div}
          >
            Weekly Sales
          </Typography>
        </div>
        <Box sx={{ flexGrow: 1 }} className={classes.chart_div_sub}>
          <Grid container spacing={2}>
            <MixedChart />
            {/* <Grid item xs={6}>
              <MixedChart />
            </Grid>
            <Grid item xs={6}>
              <PieChart />
            </Grid> */}
          </Grid>
        </Box>
      </Card>
    </>
  );
};

export default Charts;
