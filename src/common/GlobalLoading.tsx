import {
  Box as Container,
  CircularProgress,
  SxProps,
  Theme,
} from "@mui/material";
import React from "react";

export const GlobalLoading = () => {
  return (
    <Container sx={ContainerSX}>
      <CircularProgress size={"10rem"} />
    </Container>
  );
};

const ContainerSX: SxProps<Theme> = {
  height: "100%",
  width: "100%",
  display: "grid",
  justifyContent: "center",
  alignItems: "center",
  
};
