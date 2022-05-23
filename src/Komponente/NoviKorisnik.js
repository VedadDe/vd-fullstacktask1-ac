import React, {useState} from "react";
import {db} from "../Baza/firebase_config";
import {
    Alert,
    Box,
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Snackbar,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import Korisnici from "./Korisnici";

export default function NoviKorisnik({marke, tipovi}) {
    const [imeNovo, setImeNovo] = useState();
    const [registracijaNovo, setRegistracijaNovo] = useState();
    const [open, setOpen] = React.useState(false);

    const [noveMarke, setNoveMarke] = useState("");
    const [noviTipovi, setNoviTipovi] = useState("");

    const handleChange = (event) => {
        setNoveMarke(event.target.value);
    };
    const handleChangeTip = (event) => {
        setNoviTipovi(event.target.value);
    };

    function dodajKorisnika(e) {
        e.preventDefault();
        db.collection("Korisnici").add({
            ime: imeNovo,
            marka: noveMarke,
            posjeta: 0,
            registracija: registracijaNovo,
            tip: noviTipovi,
        });
        setOpen(true);
    }

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        setOpen(false);
    };
    return (
        <Box>
            <br/>
            <br/>
            <Typography variant={"h5"} sx={{color: "green"}}>
                Forma za kreiranje novog korisnika:{" "}
            </Typography>

            <FormControl variant="standard" sx={{m: 1, minWidth: 120}}>
                <InputLabel id="demo-simple-select-label">Marke</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={noveMarke}
                    label="Marke"
                    onChange={handleChange}
                >
                    {marke.map((marke) => (
                        <MenuItem value={marke.naziv}>{marke.naziv}</MenuItem>
                    ))}
                </Select>
            </FormControl>

            <FormControl variant="standard" sx={{m: 1, minWidth: 120}}>
                <InputLabel id="demo-simple-select-label">Tipovi</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={noviTipovi}
                    label="Tipovi"
                    onChange={handleChangeTip}
                >
                    {tipovi.map((tipovi) => (
                        <MenuItem value={tipovi.naziv}>{tipovi.naziv}</MenuItem>
                    ))}
                </Select>
            </FormControl>

            <TextField
                placeholder={"ime"}
                onChange={(e) => {
                    setImeNovo(e.target.value);
                }}
            />
            <TextField
                placeholder={"registracija"}
                onChange={(e) => {
                    setRegistracijaNovo(e.target.value);
                }}
            />

            <Button color="primary" onClick={dodajKorisnika}>
                Dodaj korisnika
            </Button>

            <Stack spacing={2} sx={{width: "100%"}}>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert
                        onClose={handleClose}
                        severity="success"
                        sx={{width: "100%"}}
                    >
                        Korisnik dodan!
                    </Alert>
                </Snackbar>
            </Stack>
        </Box>
    );
}
