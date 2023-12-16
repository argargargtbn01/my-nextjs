import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Button, Modal, Typography } from "@mui/material";
import { useState } from "react";
import CreateModal from "./CreateModal";
interface IProps {
  blogs: IBlog[];
}
export default function AppTable(props: IProps) {
  const { blogs } = props;
  const [showModalCreate,setShowModalCreate] = useState(false)
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3> Table Blogs</h3>
        <Button onClick={() => setShowModalCreate(true)}>Add new</Button>
        <CreateModal showModalCreate = {showModalCreate} setShowModalCreate={setShowModalCreate} ></CreateModal>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 450 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">id</TableCell>
              <TableCell align="center">author</TableCell>
              <TableCell align="center">title</TableCell>
              <TableCell align="center">action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {blogs?.map((blog) => (
              <TableRow
                key={blog.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {blog.id}
                </TableCell>
                <TableCell align="center">{blog.author}</TableCell>
                <TableCell align="center">{blog.title}</TableCell>
                <TableCell align="center">
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Button variant="contained">View</Button>
                    <Button variant="contained" color="success">
                      Edit
                    </Button>
                    <Button variant="contained" color="error">
                      Delete
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
