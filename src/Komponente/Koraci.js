import React, {useEffect, useState} from "react";

import {Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";


export default function Koraci({ime}){

    return(
<TableBody>
                <TableRow>


                <TableCell align="left" style={{width:'10%'}}>{ime}</TableCell>
                </TableRow>

            </TableBody>


    )



}