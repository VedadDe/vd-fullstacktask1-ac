import React from "react";
import {TableBody, TableCell, TableRow,} from "@mui/material";

export default function Korisnici({ime, marka, posjeta, registracija, tip}) {
    return (
        <TableBody>
            <TableRow>
                <TableCell align="left" style={{width: "10%"}}>
                    {ime}
                </TableCell>
                <TableCell align="left" style={{width: "10%"}}>
                    {marka}
                </TableCell>
                <TableCell align="left" style={{width: "10%"}}>
                    {tip}
                </TableCell>
                <TableCell align="left" style={{width: "10%"}}>
                    {posjeta}
                </TableCell>
                <TableCell align="left" style={{width: "10%"}}>
                    {registracija}
                </TableCell>
            </TableRow>
        </TableBody>
    );
}
