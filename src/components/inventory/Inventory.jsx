import React from "react";
import Typography from "@mui/material/Typography";
import classes from "../App.module.scss";
import { Grid, Box } from "@mui/material";
import ItemList from "./ItemList";
import ItemListTable from "./ItemListTable";

const Inventory = () => {
  return (
    <>
      <div className={classes.div}>
        <div>
          <Typography variant="h5" component="div">
            Daily Forms
          </Typography>
        </div>
        <div className={classes.sub_div}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={2}>
                <ItemList />
              </Grid>
              <Grid item xs={10}>
                <ItemListTable />
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
    </>
  );
};

export default Inventory;
