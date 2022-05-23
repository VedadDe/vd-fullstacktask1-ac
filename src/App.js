import "./App.css";
import {db} from "./Baza/firebase_config";
import React, {useEffect, useState} from "react";
import Korisnici from "./Komponente/Korisnici";
import {Box, Container, Table, TableCell, TableHead, TableRow, Typography,} from "@mui/material";
import Evidencija from "./Komponente/Evidencija";
import Koraci from "./Komponente/Koraci";
import NoviKorisnik from "./Komponente/NoviKorisnik";
import Programi from "./Komponente/Programi";
import NovaEvidencija from "./Komponente/NovaEvidencija";

function App() {
    const [korisnici, setKorisnici] = useState([]);
    const [koraci, setKoraci] = useState([]);
    const [programi, setProgrami] = useState([]);
    const [evidencija, setEvidencija] = useState([]);

    const [tipovi, setTipovi] = useState([]);
    const [marke, setMarke] = useState([]);

    useEffect(() => {
        getKorisnici();
        getProgrami();
        getEvidencija();
        getKoraci();
        getMarke();
        getTipovi();
    }, []);

    function getMarke() {
        db.collection("Marke").onSnapshot(function (querySnapshot) {
            setMarke(
                querySnapshot.docs.map((doc) => ({
                    naziv: doc.data().naziv,
                }))
            );
        });
    }

    function getTipovi() {
        db.collection("Tipovi").onSnapshot(function (querySnapshot) {
            setTipovi(
                querySnapshot.docs.map((doc) => ({
                    naziv: doc.data().naziv,
                }))
            );
        });
    }

    function getKorisnici() {
        db.collection("Korisnici").onSnapshot(function (querySnapshot) {
            setKorisnici(
                querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ime: doc.data().ime,
                    registracija: doc.data().registracija,
                    tip: doc.data().tip,
                    marka: doc.data().marka,
                    posjeta: doc.data().posjeta,
                }))
            );
        });
    }

    function getKoraci() {
        db.collection("Koraci").onSnapshot(function (querySnapshot) {
            setKoraci(
                querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    naziv: doc.data().naziv,
                }))
            );
        });
    }

    function getEvidencija() {
        db.collection("Evidencija").onSnapshot(function (querySnapshot) {
            setEvidencija(
                querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    korisnik: doc.data().korisnik,
                    cijena: doc.data().cijena,
                    program: doc.data().program,
                }))
            );
        });
    }

    function getProgrami() {
        db.collection("Programi").onSnapshot(function (querySnapshot) {
            setProgrami(
                querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    cijena: doc.data().cijena,
                    opis: doc.data().opis,
                }))
            );
        });
    }

    return (
        <Container>
            <Typography variant={"h1"}>Aplikacija za autopraonicu</Typography>
            <Typography variant={"h4"} sx={{color: "blue"}}>
                Tabela svih korisnika:{" "}
            </Typography>

            {
                <Container>
                    <Table>
                        <br/>
                        <TableHead>
                            <TableRow>
                                <TableCell align="left" style={{width: "10%"}}>
                                    Ime korisnika
                                </TableCell>
                                <TableCell align="left" style={{width: "10%"}}>
                                    Marka vozila
                                </TableCell>
                                <TableCell align="left" style={{width: "10%"}}>
                                    Tip vozila
                                </TableCell>
                                <TableCell align="left" style={{width: "10%"}}>
                                    Brojac posjeta
                                </TableCell>
                                <TableCell align="left" style={{width: "10%"}}>
                                    registracija vozila
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        {korisnici.map((kor) => (
                            <Korisnici
                                ime={kor.ime}
                                marka={kor.marka}
                                posjeta={kor.posjeta}
                                ragistracija={kor.cijena}
                                tip={kor.tip}
                                registracija={kor.registracija}
                            />
                        ))}
                    </Table>
                    <NoviKorisnik marke={marke} tipovi={tipovi}/>
                </Container>
            }
            <br/>
            <br/>
            <Typography variant={"h4"} sx={{color: "blue"}}>
                Tabela svih programa pranja:{" "}
            </Typography>

            {
                <Table>
                    <br/>
                    <TableHead>
                        <TableRow>
                            <TableCell align="left" style={{width: "10%"}}>
                                Program
                            </TableCell>
                            <TableCell align="left" style={{width: "10%"}}>
                                Cijena
                            </TableCell>
                            <TableCell align="left" style={{width: "10%"}}>
                                Opis
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    {programi.map((programi) => (
                        <Programi
                            ime={programi.id}
                            cijena={programi.cijena}
                            opis={programi.opis}
                        />
                    ))}
                </Table>
            }
            <br/>
            <br/>
            <Typography variant={"h4"} sx={{color: "blue"}}>
                Koraci koji se nude:{" "}
            </Typography>

            {
                <Box>
                    <Koraci koraci={koraci}/>
                </Box>
            }
            <br/>
            <br/>
            <Typography variant={"h4"} sx={{color: "blue"}}>
                Evidencija rada:{" "}
            </Typography>

            {
                <Box>
                    <Table>
                        <br/>
                        <TableHead>
                            <TableRow>
                                <TableCell align="left" style={{width: "10%"}}>
                                    Ime korisnika
                                </TableCell>
                                <TableCell align="left" style={{width: "10%"}}>
                                    Cijena
                                </TableCell>
                                <TableCell align="left" style={{width: "10%"}}>
                                    Program
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        {evidencija.map((evidencija) => (
                            <Evidencija
                                ime={evidencija.korisnik}
                                cijena={evidencija.cijena}
                                program={evidencija.program}
                            />
                        ))}
                    </Table>
                    <br/>
                    <Typography variant={"h5"} sx={{color: "green"}}>
                        Nova usluga- evidencija:{" "}
                    </Typography>

                    <NovaEvidencija korisnici={korisnici} programi={programi}/>
                </Box>
            }
        </Container>
    );
}

export default App;
