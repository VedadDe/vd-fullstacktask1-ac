import React, {useState} from "react";

import {
    Alert,
    Button,
    Container,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Snackbar,
    Stack,
    Typography,
} from "@mui/material";
import {db} from "../Baza/firebase_config";

export default function NovaEvidencija({korisnici, programi}) {
    const [korisnik, setKorisnik] = useState();
    const [program, setProgram] = useState();
    const [cijena, setCijena] = useState();
    const [popustKoeficient, setPopustKoeficient] = useState(1);

    const [open, setOpen] = React.useState(false);

    const handleChange = (event) => {
        setKorisnik(event.target.value);
    };

    const handleChangeProgram = (event) => {
        setProgram(event.target.value);
    };

    function ispisi(e) {
        e.preventDefault();

        db.collection("Evidencija").add({
            cijena: cijena,
            korisnik: korisnik.ime,
            program: program.id,
        });

        db.collection("Korisnici")
            .doc(korisnik.id)
            .update({
                posjeta: korisnik.posjeta + 1,
            });

        setOpen(true);
    }

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        setOpen(false);
    };

    function izracunajCijenu() {
        if (korisnik.tip === "SUV") {
            setPopustKoeficient(1.25);
        } else if (korisnik.tip === "karavan") {
            setPopustKoeficient(1.15);
        }
        if (korisnik.posjeta % 10 === 0) setPopustKoeficient(0);
        setCijena(popustKoeficient * program.cijena);
    }

    return (
        <Container>
            <FormControl variant="standard" sx={{m: 3, width: "90%"}}>
                <InputLabel>Korisnici</InputLabel>
                <Select
                    value={korisnici.ime}
                    label={korisnici.ime}
                    onChange={handleChange}
                >
                    {korisnici.map((korisnici) => (
                        <MenuItem value={korisnici}>{korisnici.ime}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl variant="standard" sx={{m: 3, width: "90%"}}>
                <InputLabel>Programi</InputLabel>
                <Select
                    value={programi.id}
                    label={programi.id}
                    onChange={handleChangeProgram}
                >
                    {programi.map((programi) => (
                        <MenuItem value={programi}>{programi.id}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            <Button
                onClick={izracunajCijenu}
                variant="outlined"
                sx={{margin: "5%"}}
            >
                Izračunaj cijenu
            </Button>

            <Button onClick={ispisi} variant="outlined" sx={{margin: "5%"}}>
                Naplati- evidentiraj
            </Button>
            <br/>
            <Typography variant="h9" sx={{color: "red"}}>Cijena pranja je: {cijena}</Typography>

            <Stack spacing={2} sx={{width: "100%"}}>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert
                        onClose={handleClose}
                        severity="success"
                        sx={{width: "100%"}}
                    >
                        Naplaćeno uspješno!
                    </Alert>
                </Snackbar>
            </Stack>
        </Container>
    );
}
