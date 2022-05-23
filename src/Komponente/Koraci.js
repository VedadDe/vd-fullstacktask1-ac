import React from "react";

import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";

export default function Koraci({koraci}) {
    return (
        <FormControl variant="standard" sx={{m: 3, width: "90%"}}>
            <InputLabel id="demo-simple-select-label">Koraci</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={koraci.naziv}
                label="Koraci"
            >
                {koraci.map((koraci) => (
                    <MenuItem value={koraci.naziv}>{koraci.naziv}</MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}
