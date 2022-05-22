import logo from './logo.svg';
import './App.css';
import {db} from './Baza/firebase_config';
import * as firebase from "firebase/app"
import React, {useEffect, useState} from "react";
import Korisnici from "./Komponente/Korisnici";
import {Box, Table, TableCell, TableHead, TableRow} from "@mui/material";
import Evidencija from "./Komponente/Evidencija";
import Koraci from "./Komponente/Koraci";
import NoviKorisnik from "./Komponente/NoviKorisnik";

function App() {
    const [korisnici, setKorisnici] = useState([])
    const [koraci, setKoraci] = useState([])
    const [programi, setProgrami] = useState([])
    const [evidencija, setEvidencija] = useState([])

    const [tipovi, setTipovi] = useState([])
    const [marke, setMarke] = useState([])

    useEffect(() =>{
        getKorisnici()
        getProgrami()
        getEvidencija()
        getKoraci()
        getMarke()
        getTipovi()
    }, [])

    function getMarke(){
        db.collection("Marke").onSnapshot(function (querySnapshot){
            setMarke(
                querySnapshot.docs.map((doc)=>({
                    naziv:doc.data().naziv
                })))
        })
        console.log(JSON.stringify(marke) + " MArkeee ")

    }
    function getTipovi(){
        db.collection("Tipovi").onSnapshot(function (querySnapshot){
            setTipovi(
                querySnapshot.docs.map((doc)=>({
                    naziv:doc.data().naziv
                })))
        })
        console.log(JSON.stringify(marke) + " MArkeee ")

    }

    function getKorisnici(){
    db.collection("Korisnici").onSnapshot(function (querySnapshot){
      setKorisnici(
          querySnapshot.docs.map((doc)=>({
            id:doc.id,
            ime: doc.data().ime,
            registracija: doc.data().registracija,
            tip: doc.data().tip,
            marka: doc.data().marka,
            posjeta: doc.data().posjeta

          })))
    })
      console.log(korisnici)

  }


    function getKoraci(){
        db.collection("Koraci").onSnapshot(function (querySnapshot){
            setKoraci(
                querySnapshot.docs.map((doc)=>({
                    id:doc.id,
                    naziv: doc.data().naziv

                })))
        })
        console.log(koraci)

    }

    function getEvidencija(){
        db.collection("Evidencija").onSnapshot(function (querySnapshot){
            setEvidencija(
                querySnapshot.docs.map((doc)=>({
                    id:doc.id,
                    korisnik: doc.data().korisnik,
                    cijena: doc.data().cijena,
                    program: doc.data().program
                })))
        })
        console.log(evidencija)

    }

    function getProgrami(){
        db.collection("Programi").onSnapshot(function (querySnapshot){
            setProgrami(
                querySnapshot.docs.map((doc)=>({
                    id:doc.id,
                    cijena: doc.data().cijena,
                    koraci: doc.data().koraci

                })))
        })
        console.log(programi)

    }



    return (
    <div className="App">


      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
          <button onClick={getKorisnici}>korisnici</button>
          <button onClick={getEvidencija}>evidencija</button>
          <button onClick={getKoraci}>koraci</button>
          <button onClick={getProgrami}>programi</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >

          Learn React
        </a>
      </header>
        {
            <Table>
                <br/>
                <TableHead>
                    <TableRow>
                        <TableCell align="left" style={{width:'10%'}}>Ime korisnika</TableCell>
                        <TableCell align="left" style={{width:'10%'}}>Marka vozila</TableCell>
                        <TableCell align="left" style={{width:'10%'}}>Tip vozila</TableCell>
                        <TableCell align="left" style={{width:'10%'}}>Brojac posjeta</TableCell>
                        <TableCell align="left" style={{width:'10%'}}>registracija vozila</TableCell>

                    </TableRow>
                </TableHead>{
                korisnici.map((kor)=>(
                <Korisnici ime={kor.ime} marka={kor.marka} posjeta={kor.posjeta} ragistracija={kor.cijena} tip={kor.tip} registracija={kor.registracija}/>
                ))}

            </Table>}

        {

            <Table>
            <br/>
            <TableHead>
            <TableRow>
            <TableCell align="left" style={{width:'10%'}}>Korak</TableCell>



            </TableRow>
            </TableHead>{
            koraci.map((koraci)=>(
            <Koraci ime={koraci.naziv} />
            ))}

            </Table>
        }
        {
            <Box>
            <NoviKorisnik marke={marke} tipovi={tipovi}/>
            <Table>
                <br/>
                <TableHead>
                    <TableRow>
                        <TableCell align="left" style={{width:'10%'}}>Ime korisnika</TableCell>
                        <TableCell align="left" style={{width:'10%'}}>Cijena</TableCell>
                        <TableCell align="left" style={{width:'10%'}}>Datum</TableCell>


                    </TableRow>
                </TableHead>{
                evidencija.map((evidencija)=>(
                    <Evidencija ime={evidencija.korisnik} cijena={evidencija.cijena} />
                ))}

            </Table>
            </Box>
        }
    </div>
  );}

export default App;
