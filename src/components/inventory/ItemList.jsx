import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Card from "@mui/material/Card";
import CommentIcon from "@mui/icons-material/Comment";

const items = [
  { value: "Item 1", label: "Item 1" },
  { value: "Item 2", label: "Item 2" },
  { value: "Item 3", label: "Item 3" },
  { value: "Item 4", label: "Item 4" },
  { value: "Item 5", label: "Item 5" },
];
const ItemList = () => {
  const [checked, setChecked] = useState([0]);

  //   const handleToggle = (value) => {
  //     const currentIndex = checked.indexOf(value);
  //     const newChecked = [...checked];

  //     if (currentIndex === -1) {
  //       newChecked.push(value);
  //     } else {
  //       newChecked.splice(currentIndex, 1);
  //     }

  //     setChecked(newChecked);
  //   };

  return (
    <Card>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {items.map((item) => {
          const labelId = `checkbox-list-label-${item.value}`;

          return (
            <ListItem key={item.value} disablePadding>
              <ListItemButton
                role={undefined}
                //   onClick={handleToggle(value)}
                dense
              >
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    //   checked={checked.indexOf(value) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ "aria-labelledby": item.value }}
                  />
                </ListItemIcon>
                <ListItemText id={item.value} primary={item.value} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Card>
  );
};

export default ItemList;
