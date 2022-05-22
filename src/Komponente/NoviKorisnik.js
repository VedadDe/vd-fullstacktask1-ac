import React, {useEffect, useState} from "react";
import {db} from "../Baza/firebase_config";
import {
    Box,
    Button,
    FormControl, InputLabel, MenuItem,
    Select,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TextField
} from "@mui/material";
import Korisnici from "./Korisnici";


export default function NoviKorisnik({marke, tipovi}){

    const [imeNovo, setImeNovo] = useState();
    const [markaNovo, setMarkaNovo] = useState();
    const [registracijaNovo, setRegistracijaNovo] = useState();
    const [tipNovo, setTipNovo] = useState();



    const [noveMarke, setNoveMarke] = useState('');
    const [noviTipovi, setNoviTipovi] = useState('')

    const handleChange = (event) => {
        setNoveMarke(event.target.value);
    };
    const handleChangeTip = (event) => {
        setNoviTipovi(event.target.value);
    };



    function dodajKorisnika(e){
        e.preventDefault()
        db.collection("Korisnici").add({
            ime: imeNovo,
            marka: noveMarke,
            posjeta: 0,
            registracija: registracijaNovo,
            tip: noviTipovi

        })

    }
    return(
        <Box>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-label">Marke</InputLabel>
                <Select

                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={noveMarke}
                    label="Marke"
                    onChange={handleChange}
                >
                    {
                        marke.map((marke)=>(
                            <MenuItem value={marke.naziv}>{marke.naziv}</MenuItem>
                        ))}

                </Select>
            </FormControl>

            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-label">Tipovi</InputLabel>
            <Select

                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={noviTipovi}
                label="Tipovi"
                onChange={handleChangeTip}
            >
                {
                    tipovi.map((tipovi)=>(
                        <MenuItem value={tipovi.naziv}>{tipovi.naziv}</MenuItem>
                    ))}

            </Select>
            </FormControl>


            <TextField placeholder={"ime"} onChange={(e) =>
            {setImeNovo(e.target.value)
                // eslint-disable-next-line no-template-curly-in-string
                console.log(`ovo ste upisali: ${e.target.value}`)}}/>
            <TextField placeholder={"registracija"} onChange={(e) =>
            {setRegistracijaNovo(e.target.value)
                // eslint-disable-next-line no-template-curly-in-string
                console.log(`ovo ste upisali: ${e.target.value}`)}}/>

            <Button color="primary" onClick={dodajKorisnika}>Dodaj korisnika</Button>



        </Box>
    )



}