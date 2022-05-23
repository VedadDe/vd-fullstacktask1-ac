import React from "react";

import {TableBody, TableCell, TableRow,} from "@mui/material";

export default function Evidencija({ime, cijena, program}) {
    return (
        <TableBody>
            <TableRow>
                <TableCell align="left" style={{width: "10%"}}>
                    {ime}
                </TableCell>
                <TableCell align="left" style={{width: "10%"}}>
                    {cijena}
                </TableCell>
                <TableCell align="left" style={{width: "10%"}}>
                    {program}
                </TableCell>
            </TableRow>
        </TableBody>
    );
}
