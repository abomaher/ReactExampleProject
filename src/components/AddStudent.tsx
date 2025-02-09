import { Button, Paper, TextField } from "@mui/material";
import { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from "react";
import { Students } from "../utils/data";

interface Props {
    students: Students[]
    setStudents: Dispatch<SetStateAction<Students[]>>
};

const intialState = {id: 888, fullName: "", age: "", email:"", class: ""}

export const AddStudent = ({ setStudents, students }: Props) => {

    const [formData, setFormData] = useState(intialState)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = () => {
        setStudents([...students, formData]);
        setFormData(intialState)
    };

    useEffect(() => {
        console.log("Firing useEffect")
        if(formData.fullName === "Admin"){
            alert("You can nt add Admin for name!")
        }
    }, [formData.fullName ])

    return(
        <Paper sx={{width: 300, padding: 5, marginTop:1, gap: 1, display: "flex", flexDirection: "column"}}>
            <TextField onChange={handleChange} value={formData.fullName} id="outlined-basic" label="Full Name" name="fullName" variant="outlined" />
            <TextField onChange={handleChange} value={formData.age} id="outlined-basic" label="Age" name="age" variant="outlined" />
            <TextField onChange={handleChange} value={formData.email} id="outlined-basic" label="Email" name="email" variant="outlined" />
            <TextField onChange={handleChange} value={formData.class} id="outlined-basic" label="Class" name="class" variant="outlined" />
            <Button onClick={handleSubmit} variant="contained">Submit</Button>
        </Paper>
    );
};