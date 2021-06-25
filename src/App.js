import "./App.css";
import { useState, useEffect } from "react";
import { DateTime } from "luxon";

import Header from "./Components/Header";
import SearchSection from "./Components/SearchSection";
import Hero from "./Components/Hero";
import ResultsSection from "./Components/ResultsSection";
import Footer from "./Components/Footer";

function App() {
  const [flights, setFlights] = useState(null);
  const [destinationFrom, setDestinationFrom] = useState("");
  const [destinationTo, setDestinationTo] = useState("");
  const [dateDepartureFrom, setDateDepartureFrom] = useState("");
  const [dateDepartureTo, setDateDepartureTo] = useState("");
  // const [searchQuery, setSearchQuery] = useState(null);
  // const [searchResult, setSearchResult] = useState("");

  async function fetchFlights() {
    const resp = await fetch(
      `https://api.skypicker.com/flights?fly_from=${destinationFrom}&fly_to=${destinationTo}&date_from=${dateDepartureFrom}&date_to=${dateDepartureTo}&partner=data4youcbp202106&limit=10`
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

  // if (flights === null) {return "Loading the flights";

  return (
    <div className="App">
      <Header />
      <Hero />
      <SearchSection
        setDestinationFrom={setDestinationFrom}
        setDestinationTo={setDestinationTo}
        setDateDepartureFrom={setDateDepartureFrom}
        setDateDepartureTo={setDateDepartureTo}
      />
      {flights ? <ResultsSection flights={flights} /> : "No Flights"}

      <Footer />
    </div>
  );
}

export default App;
