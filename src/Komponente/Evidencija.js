import React, {useEffect, useState} from "react";

import {Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";


export default function Evidencija({ime, cijena}){

/*
    let cijenaNakonPopusta;
    cijenaNakonPopusta = cijena-(1-popust)*cijena;
    if(popust==0){
        cijenaNakonPopusta = cijena

    }else {popust=1-popust}

    let radnjaNovo=radnja1-1;

    function naruci(e){
        e.preventDefault()
        console.log("narucujem sa id: " + id)
        db.collection("Narudzba").add({
            naziv: naziv,
            radnja: radnja,
            popust: (popust).toFixed(2)*100,
            platiti: cijenaNakonPopusta,
            cijenaPrijePopusta: cijena,
            gotovo: false,
            datum: firebase.firestore.FieldValue.serverTimestamp(),
            hitno: hitno,
            ime: imePrezime,
            email: email,
            telefon: telefon,
            napomena: napomena

        })
        db.collection("Artikli").doc(id).update({
            radnja1: radnjaNovo
        })
    }*/
    return(
<TableBody>
                <TableRow>


                <TableCell align="left" style={{width:'10%'}}>{ime}</TableCell>
                <TableCell align="left" style={{width:'10%'}}>{cijena}</TableCell>

                </TableRow>

            </TableBody>


    )



}