import React, {useEffect, useState} from "react";
import {db} from "../Baza/firebase_config";
import {Box, Button, Table, TableBody, TableCell, TableHead, TableRow, TextField} from "@mui/material";


export default function Korisnici({ime, marka, posjeta, registracija, tip}){


    return(

<TableBody>
                <TableRow>


                <TableCell align="left" style={{width:'10%'}}>{ime}</TableCell>
                <TableCell align="left" style={{width:'10%'}}>{marka}</TableCell>
                <TableCell align="left" style={{width:'10%'}}>{tip}</TableCell>
                <TableCell align="left" style={{width:'10%'}}>{posjeta}</TableCell>
                <TableCell align="left" style={{width:'10%'}}>{registracija}</TableCell>
                </TableRow>

            </TableBody>

    )



}