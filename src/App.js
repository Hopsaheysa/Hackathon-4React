import './App.css';
import { useState,useEffect } from 'react';
import { DateTime } from 'luxon';

import Header from './Components/Header'
import SearchSection from './Components/SearchSection'
import Hero from './Components/Hero'
import ResultsSection from './Components/ResultsSection'
import Footer from './Components/Footer'

function App() {
  const [flights, setFlights] = useState(null);
  const [destinationFrom, setDestinationFrom] = useState("PRG");
  const [destinationTo, setDestinationTo] = useState("VIE");
  const [dateDeparture, setDateDepartureFrom] = useState("25/06/2021");
  const [dateArrival, setDateDepartureTo] = useState("30/06/2021");
  const [searchQuery, setSearchQuery] = useState(null);
  const [searchResult, setSearchResult] = useState("");



  async function fetchFlights() {    

    const resp = await fetch(`https://api.skypicker.com/flights?fly_from=${destinationFrom}&fly_to=${destinationTo}&date_from=${dateDeparture}&date_to=${dateArrival}&partner=data4youcbp202106`);
    const flights = await resp.json();
    console.log(flights);

    return setFlights(flights);

  }

  useEffect(() => {
    searchQuery && fetchFlights();
  }, [searchQuery])

  // if (flights === null) {return "Loading the flights";


  return (
    <div className="App">
      <Header />
      <Hero />
      <SearchSection setDestinationFrom={setDestinationFrom} setDestinationTo={setDestinationTo} setDateDepartureFrom={setDateDepartureFrom} setDateDepartureTo={setDateDepartureTo} />
      {flights ?  <ResultsSection /> : "No Flights"}
           
      <Footer />

    </div>
  );
}

export default App;

