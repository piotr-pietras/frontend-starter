import {
  Toolbar as ToolbarMUI,
  AppBar as AppBarMUI,
  IconButton as IconButtonMUI,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SxProps,
  Theme,
  useTheme,
  Box,
  styled,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import React, { ReactElement, useCallback, useState } from "react";
import { Drawer } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../routes";
import {
  Apartment as ApartmentIcon,
  Brightness3 as NightIcon,
  Brightness5 as DayIcon,
  Menu as MenuIcon,
  Info as InfoIcon,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { selectAppBar } from "./appBar.selector";
import { AppSlice } from "../app.slice";

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
    name: "Test Feature",
    to: AppRoutes.test,
    muiIcon: <ApartmentIcon fontSize="large" />,
  },
  {
    name: "About",
    to: AppRoutes.about,
    muiIcon: <InfoIcon fontSize="large" />,
  },
];

const {
  actions: { pallateToggled },
} = AppSlice;

export const AppBar = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { paletteMode } = useSelector(selectAppBar);
  const navigate = useNavigate();
  const [isDrawerOpened, setIsDrawerOpened] = useState(false);

  const onPallateToggle = useCallback(() => dispatch(pallateToggled()), []);
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
          <Container>
            <IconButton onClick={onDrawerOpen}>
              <MenuIcon fontSize="large" color="inherit" />
            </IconButton>
            <Typography variant="h6">Frontend Starter</Typography>
          </Container>
          <Container>
            <IconButton onClick={onPallateToggle}>
              {paletteMode === "dark" ? (
                <NightIcon fontSize="large" color="inherit" />
              ) : (
                <DayIcon fontSize="large" color="inherit" />
              )}
            </IconButton>
          </Container>
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

const Toolbar = styled(ToolbarMUI)(() => ({
  display: "flex",
  justifyContent: "space-between",
}));

const Container = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
}));

const IconButton = styled(IconButtonMUI)(({ theme }) => ({
  color: theme.colors.white,
}));
