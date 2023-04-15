import {
  Toolbar,
  AppBar as AppBarMUI,
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SxProps,
  Theme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import InfoIcon from "@mui/icons-material/Info";
import DashboardIcon from "@mui/icons-material/Dashboard";
import React, { ReactElement, useCallback, useState } from "react";
import { theme } from "../services/theme";
import { Drawer } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../routes";

const navigations: {
  name: string;
  to: string;
  muiIcon?: ReactElement;
}[] = [
  {
    name: "Dashboard",
    to: AppRoutes.dashboard,
    muiIcon: <DashboardIcon fontSize="large" />,
  },
  {
    name: "About",
    to: AppRoutes.about,
    muiIcon: <InfoIcon fontSize="large" />,
  },
];

export const AppBar = () => {
  const navigate = useNavigate();
  const [isDrawerOpened, setIsDrawerOpened] = useState(false);

  const onDrawerClose = useCallback(() => setIsDrawerOpened(false), []);
  const onDrawerOpen = useCallback(() => setIsDrawerOpened(true), []);
  const onNavigate = useCallback((to: string) => {
    onDrawerClose();
    navigate(to);
  }, []);

  return (
    <>
      <AppBarMUI position="static">
        <Toolbar>
          <IconButton sx={IconButtonSX} onClick={onDrawerOpen}>
            <MenuIcon fontSize="large" color="inherit" />
          </IconButton>
          <Typography variant="h6">Frontend Starter</Typography>
        </Toolbar>
      </AppBarMUI>
      <Drawer anchor={"left"} open={isDrawerOpened} onClose={onDrawerClose}>
        <List>
          {navigations.map(({ to, name, muiIcon }) => (
            <ListItem key={to}>
              <ListItemButton onClick={() => onNavigate(to)}>
                <ListItemIcon>{muiIcon}</ListItemIcon>
                <ListItemText primary={name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

const IconButtonSX: SxProps<Theme> = { color: theme.colors.white };
