import "./App.css";
import { useState, useEffect } from "react";
import { DateTime } from "luxon";

import Header from "./Components/Header";
import SearchSection from "./Components/SearchSection";
import Hero from "./Components/Hero";
import ResultsSection from "./Components/ResultsSection";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  const [flights, setFlights] = useState(null);
  const [destinationFrom, setDestinationFrom] = useState("");
  const [destinationTo, setDestinationTo] = useState("");
  const [dateDepartureFrom, setDateDepartureFrom] = useState("");
  const [dateDepartureTo, setDateDepartureTo] = useState("");
  const [directFlight, setDirectFlight] = useState("&direct_flights=0")
  const [offset, setOffset] = useState(0);
  const [resultsPerPage, setResultsPerPage] = useState(5);


  // const [searchQuery, setSearchQuery] = useState(null);
  // const [searchResult, setSearchResult] = useState("");


  async function fetchFlights() {
    const resp = await fetch(
      `https://api.skypicker.com/flights?fly_from=${destinationFrom}&fly_to=${destinationTo}&date_from=${dateDepartureFrom}&date_to=${dateDepartureTo}&partner=data4youcbp202106&${directFlight}

`
    );
    const flights = await resp.json();
    console.log(flights.data);
    return setFlights(flights.data);
  }

  useEffect(() => {
    destinationFrom &&
      destinationTo &&
      dateDepartureFrom &&
      dateDepartureTo &&
      fetchFlights();
  }, [destinationFrom, destinationTo, dateDepartureFrom, dateDepartureTo]);

  // if (flights === null) return "Loading the flights";

  return (
    <div className="App">
      <Header />
      <Hero />
      <SearchSection
        setDestinationFrom={setDestinationFrom}
        setDestinationTo={setDestinationTo}
        setDateDepartureFrom={setDateDepartureFrom}
        setDateDepartureTo={setDateDepartureTo}
        setDirectFlight={setDirectFlight}
        setResultsPerPage={setResultsPerPage}
      />
      {flights && flights.length > 0 ? 
          <ResultsSection 
          flights={flights} 
          resultsPerPage={resultsPerPage}
          setOffset={setOffset} 
          offset={offset} /> : <h2 className="no__flights">Sorry, they're no flights to that destination</h2>}

      <Contact />
      <Footer />
    </div>
  );
}

export default App;



