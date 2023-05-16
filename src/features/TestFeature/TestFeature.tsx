import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTestFeature } from "./testFeature.selector";
import { useFetchTestDataThunk } from "./testFeature.thunk";
import { TestFeatureSlice } from "./testFeature.slice";
import { DataGrid } from "@mui/x-data-grid";
import { columns } from "./columns";
import { Button, styled, CircularProgress } from "@mui/material";

const { qunatityChanged } = TestFeatureSlice.actions;

export const TestFeature = () => {
  const dispatch = useDispatch();
  const more = () => dispatch(qunatityChanged(quantity + 10));
  const { quantity, testData, isPending } = useSelector(selectTestFeature);

  useFetchTestDataThunk([quantity]);

  return (
    <Container>
      <ButtonContainer>
        <Button onClick={more} disabled={isPending} variant="contained">
          {isPending ? <CircularProgress /> : <p>more +10</p>}
        </Button>
      </ButtonContainer>
      <DataGrid rows={testData} columns={columns} />
    </Container>
  );
};

const Container = styled("div")(() => ({
  padding: "1rem",
}));

const ButtonContainer = styled("div")(() => ({
  marginBottom: "1rem",
}));
