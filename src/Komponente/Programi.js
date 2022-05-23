import React from "react";
import {TableBody, TableCell, TableRow} from "@mui/material";


export default function Programi({ime, cijena, opis}) {


    return (

        <TableBody>
            <TableRow>


                <TableCell align="left" style={{width: '10%'}}>{ime}</TableCell>
                <TableCell align="left" style={{width: '10%'}}>{cijena}</TableCell>
                <TableCell align="left" style={{width: '10%'}}>{opis}</TableCell>

            </TableRow>

        </TableBody>

    )


}