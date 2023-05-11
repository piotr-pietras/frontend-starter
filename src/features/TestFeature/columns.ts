import { GridColDef } from "@mui/x-data-grid";

export const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "first_name",
    headerName: "First name",
    minWidth: 150,
    editable: true,
  },
  {
    field: "last_name",
    headerName: "Last name",
    minWidth: 150,
    editable: true,
  },
  {
    field: "email",
    headerName: "Email",
    editable: true,
    minWidth: 300,
  },
  {
    field: "gender",
    headerName: "Gender",
    minWidth: 100,
  },
  {
    field: "ip_address",
    headerName: "IP Adress",
    minWidth: 170,
  },
];
