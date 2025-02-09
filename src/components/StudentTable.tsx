import { Students } from "../utils/data";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useMemo } from "react";

interface Props {
  students: Students[]
};

export const StudentTable = (props: Props) => {


  useEffect(() => {
    if(props.students.length === 5){
        alert("Max limit reached")
    }
  }, [props.students])

  const studentWithScholarship = useMemo(() => {
    return props.students.map((s) => {
    let result = false;
    for(let i = 0; i <= 100000000; i++) {
      result = Math.random() > 0.5
    }
    return {...s, eligible: result}
    });
  }, []);

    return(
        <TableContainer component={Paper} sx={{with: "800px"}}>
          <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Full Name</TableCell>
            <TableCell>Ega</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Class</TableCell>
            <TableCell>Scholarship</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {props.students.map((item, index) => {
                return(
                    <tr>
                    <TableCell>{item.fullName}</TableCell>
                    <TableCell>{item.age}</TableCell>
                    <TableCell>{item.email}</TableCell>
                    <TableCell>{item.class}</TableCell>
                    <TableCell>{studentWithScholarship[index]?.eligible ? "Yes" : "No"}</TableCell>
                    </tr>
                );
            })}
        </TableBody>
        </Table>
      </TableContainer>
    );
}