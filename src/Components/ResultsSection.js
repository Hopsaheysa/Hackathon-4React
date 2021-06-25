import { DateTime } from "luxon";

function ResultsSection(props) {
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
            </tr>

            {props.flights.map((flight, i) => (
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default ResultsSection;
