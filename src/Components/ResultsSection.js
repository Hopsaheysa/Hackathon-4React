function ResultsSection() {
    return (
        <section id="section_two">
            <div>
                <h1>Search results</h1>

                <table className="styled-table">
                    <tbody>
                        <tr>
                            <th>Destination</th>
                            <th>Departure Time</th>
                            <th>Arrival Time</th>
                            <th>Price</th>
                        </tr>
                    </tbody>
                     {/* <tbody>
                    <tr>
                    <td>Paris</td>
                    <td>12:00</td>
                    <td>15:30</td>
                    <td>$275</td>
            </tr>
            </tbody>
            <tr>
                    <td>Berlin</td>
                    <td>12:10</td>
                    <td>15:40</td>
                    <td>$175</td>
            </tr>
            <tr>
                    <td>London</td>
                    <td>13:10</td>
                    <td>16:40</td>
                    <td>$375</td>
            </tr> */}



                    {/* @foreach($reservations as $reservation)
                <tr>
                    <td>{{ $reservation->book->title }}</td>
                    <td></td>
                    <td>{{ $reservation->from }}</td>
                    <td>{{ $reservation->to }}</td>
                </tr>
            @endforeach */}

                </table>
            </div>
        </section>

    )
}


export default ResultsSection


