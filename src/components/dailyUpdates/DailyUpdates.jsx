import React from "react";
import Typography from "@mui/material/Typography";
import classes from "../App.module.scss";
import { Grid, Box } from "@mui/material";
import ItemListTable from "../inventory/ItemListTable";
import Charts from "../charts/Charts";
import ProductTable from "./ProductTable";
const DailyUpdates = () => {
  return (
    <>
      <div className={classes.div}>
        <div>
          <Typography variant="h5" component="div">
            Daily Updates
          </Typography>
        </div>
        <div className={classes.sub_div}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container>
              <Grid item xs={12}>
                <ProductTable />
              </Grid>
            </Grid>
            <Grid container className={classes.div}>
              <Grid item xs={12}>
                <Charts />
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
    </>
  );
};

export default DailyUpdates;
