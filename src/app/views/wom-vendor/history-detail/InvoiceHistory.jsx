import { useState } from "react";
import {
  Box,
  Table,
  styled,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  Container
} from "@mui/material";

// STYLED COMPONENT
const StyledTable = styled(Table)(() => ({
  whiteSpace: "pre",
  "& thead": {
    "& tr": { "& th": { paddingLeft: 0, paddingRight: 0 } }
  },
  "& tbody": {
    "& tr": { "& td": { paddingLeft: 0, textTransform: "capitalize" } }
  }
}));

const subscribarList = [
  {
    name: "5-speed R151 manual 6-speed AC60 automatic",
    date: "18 january, 2024",
    delivery: "1 january, 2024",
    code: "2TR-FE",
    company: "ABC Fintech LTD."
  },
  {
    name: "5-speed R151 manual 6-speed RC60 manual",
    date: "10 january, 2024",
    delivery: "1 january, 2024",
    code: "2GD-FTV",
    company: "My Fintech LTD."
  },
  {
    name: "6-speed AC60 automatic",
    date: "10 january, 2024",
    delivery: "1 january, 2024",
    code: "2GD-FTV",
    company: "My Fintech LTD."
  },
  {
    name: "5-speed R151 manual 6-speed RC60 manual 6-speed AC60 automatic",
    date: "8 january, 2024",
    delivery: "1 january, 2024",
    code: "1GD-FTV",
    company: "Collboy Tech LTD."
  },
  {
    name: "5-speed R151 manual 6-speed AC60 automatic",
    date: "1 january, 2024",
    delivery: "1 january, 2024",
    code: "2TR-FE",
    company: "ABC Fintech LTD."
  },
  {
    name: "5-speed R151 manual 6-speed RC60 manual",
    date: "1 january, 2024",
    delivery: "1 january, 2024",
    code: "	2GD-FTV",
    company: "ABC Fintech LTD."
  },
  {
    name: "6-speed AC60 automatic",
    date: "1 january, 2024",
    delivery: "1 january, 2024",
    code: "2GD-FTV",
    company: "ABC Fintech LTD."
  },
  {
    name: "5-speed R151 manual 6-speed RC60 manual 6-speed AC60 automatic",
    date: "1 january, 2024",
    delivery: "1 january, 2024",
    code: "1GD-FTV",
    company: "ABC Fintech LTD."
  },
  {
    name: "5-speed R151 manual 6-speed AC60 automatic",
    date: "1 january, 2024",
    delivery: "1 january, 2024",
    code: "2TR-FE",
    company: "ABC Fintech LTD."
  },
  {
    name: "5-speed R151 manual 6-speed RC60 manual",
    date: "1 january, 2024",
    delivery: "1 january, 2024",
    code: "	2GD-FTV",
    company: "ABC Fintech LTD."
  },
  {
    name: "6-speed AC60 automatic",
    date: "1 january, 2024",
    delivery: "1 january, 2024",
    code: "2GD-FTV",
    company: "ABC Fintech LTD."
  },
  {
    name: "5-speed R151 manual 6-speed RC60 manual 6-speed AC60 automatic",
    date: "1 january, 2024",
    delivery: "1 january, 2024",
    code: "1GD-FTV",
    company: "ABC Fintech LTD."
  },
  {
    name: "5-speed R151 manual 6-speed AC60 automatic",
    date: "1 january, 2024",
    delivery: "1 january, 2024",
    code: "	2TR-FE",
    company: "ABC Fintech LTD."
  }
];

export default function InvoiceHistory() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Container style={{ marginTop: "30px" }}>
      <Box width="100%" overflow="auto">
        <StyledTable>
          <TableHead>
            <TableRow>
              <TableCell align="left">Product Name</TableCell>
              <TableCell align="center">Company</TableCell>
              <TableCell align="center">Engine Code</TableCell>
              <TableCell align="center">Created Date</TableCell>
              <TableCell align="center">Delivery Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {subscribarList
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((subscriber, index) => (
                <TableRow key={index}>
                  <TableCell align="left">{subscriber.name}</TableCell>
                  <TableCell align="center">{subscriber.company}</TableCell>
                  <TableCell align="center">{subscriber.code}</TableCell>
                  <TableCell align="center">{subscriber.date}</TableCell>
                  <TableCell align="center">{subscriber.delivery}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </StyledTable>

        <TablePagination
          sx={{ px: 2 }}
          page={page}
          component="div"
          rowsPerPage={rowsPerPage}
          count={subscribarList.length}
          onPageChange={handleChangePage}
          rowsPerPageOptions={[8, 10, 25]}
          onRowsPerPageChange={handleChangeRowsPerPage}
          nextIconButtonProps={{ "aria-label": "Next Page" }}
          backIconButtonProps={{ "aria-label": "Previous Page" }}
        />
      </Box>
    </Container>
  );
}
