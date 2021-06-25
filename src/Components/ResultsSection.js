import { DateTime } from "luxon";

function ResultsSection(props) {

    let slicedFlights = props.flights.slice(props.offset, props.offset + parseInt(props.resultsPerPage));

    function handleSubmitNext() {
        const next = parseInt(props.offset) + parseInt(props.resultsPerPage);
        props.setOffset(next);
        slicedFlights = props.flights.slice(parseInt(next), parseInt(next) + parseInt(props.resultsPerPage));
        return slicedFlights;
    }

    function handleSubmitPrev() {
        let prev = props.offset - parseInt(props.resultsPerPage);
        if (prev < 0) prev = 0;
        props.setOffset(prev);
    }
    return (
        <section id="section_two">
            <div>
                <h1>Search results</h1>

                <table className="styled-table">
                    <tbody>
                        <tr>
                            <th>Origin</th>
                            <th>Destination</th>
                            <th>Departure Time</th>
                            <th>Arrival Time</th>
                            <th>Price</th>
                            <th>Stopovers</th>
                        </tr>

                        {slicedFlights.map((flight, i) => (
                            <tr key={i}>
                                <td>{flight.cityFrom}</td>
                                <td>{flight.cityTo}</td>
                                <td>
                                    {DateTime.fromMillis(flight.dTime * 1000).toFormat(
                                        "yyyy LLL dd hh:mm"
                                    )}
                                </td>
                                <td>
                                    {DateTime.fromMillis(flight.aTime * 1000).toFormat(
                                        "yyyy LLL dd hh:mm"
                                    )}
                                </td>
                                <td>{flight.price} EUR</td>
                                <td>{(flight.route.length) == 1 ? "Direct" : flight.route.length - 1}</td>
                            </tr>

                        ))}
                    </tbody>
                </table>
                {props.offset - props.resultsPerPage < 0 ? "" : <button onClick={handleSubmitPrev}>Previous</button>}
                
                {props.offset + props.resultsPerPage >= props.flights.length ? "" : <button onClick={handleSubmitNext}>Next</button>}

            </div>
        </section>
    );
}

export default ResultsSection;
