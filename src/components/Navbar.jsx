import React, { useState } from "react";
import { Box, Drawer } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import IconButton from "@mui/material/IconButton";
import classes from "./App.module.scss";
import Inventory from "./inventory/Inventory";

const drawerWidth = 240;

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [expandCollapse, setExpandCollapse] = useState(false);

  const handleExpandCollapse = () => {
    setExpandCollapse(true);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Clipped drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            <ListItem key={1} disablePadding>
              <ListItemButton>
                <ListItemText primary={"Daily Forms"} />
              </ListItemButton>
            </ListItem>
            <ListItem key={1} disablePadding>
              <ListItemButton onClick={(event) => handleExpandCollapse()}>
                <ListItemText primary={"Daily Updates"} />
                {
                  <IconButton className={classes.arrow}>
                    {expandCollapse ? <ExpandLess /> : <ExpandMore />}
                  </IconButton>
                }
              </ListItemButton>
            </ListItem>
            <Collapse in={expandCollapse} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton>
                  <ListItemText primary={"Monday"} />
                </ListItemButton>
                <ListItemButton>
                  <ListItemText primary={"Tuesday"} />
                </ListItemButton>
                <ListItemButton>
                  <ListItemText primary={"Wednesday"} />
                </ListItemButton>
                <ListItemButton>
                  <ListItemText primary={"Thursday"} />
                </ListItemButton>
                <ListItemButton>
                  <ListItemText primary={"Friday"} />
                </ListItemButton>
                <ListItemButton>
                  <ListItemText primary={"Saturday"} />
                </ListItemButton>
                <ListItemButton>
                  <ListItemText primary={"Sunday"} />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Inventory />
      </Box>
    </Box>
  );
};
export default NavBar;
