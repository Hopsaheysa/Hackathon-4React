import { DateTime } from 'luxon';

function SearchSection(props) {
    function handleSubmit(event) {
        event.preventDefault();
        const dateFrom = DateTime.fromISO(event.target[2].value);
        props.setDestinationFrom(event.target[0].value);
        props.setDestinationTo(event.target[1].value);
        props.setDateDepartureFrom(event.target[2].value);
        props.setDateDepartureTo(event.target[3].value);

        if (event.target[4].checked) {
            props.setDirectFlight("&direct_flights=1")
        } else {
            props.setDirectFlight("&direct_flights=0");
        }
    }

    // function handleChange(event) {
    //     const {name, value, type, checked} = event.target
    //     type === "checkbox" ? props.directFlight({ [name]: checked }) : props.directFlight({ [name]: value })
    // }


    return (
        <section id="section_one">
            <div>
                <h2>Where do you want to go?</h2>
                <br />
                <form onSubmit={(event) => handleSubmit(event)}>
                    <p>From:
                    </p>
                    <select name="destinations" id="destinations">
                        <option value="PRG">Prague</option>
                        <option value="SXF">Berlin</option>
                        <option value="MAD">Madrid</option>
                        <option value="WAW">Warsaw</option>
                        <option value="PED">Pardubice</option>
                        <option value="EMA">East Midlands Airport</option>
                    </select>
                    <br />
                    <p>To: </p>
                    <select name="destinations" id="destinations">
                        <option value="VLC">Valencia</option>
                        <option value="BCN">Barcelona</option>
                        <option value="MAD">Madrid</option>
                        <option value="MXP">Milano</option>
                        <option value="PRG">Prague</option>
                        <option value="EMA">East Midlands Airport</option>
                    </select>
                    <br />
                    From:
                    <br />
                    <input type="date" defaultValue="2021-06-26" min="2021-06-25" />
                    <br />
                    Return:
                    <br />
                    <input type="date" defaultValue="2021-06-30" />
                    <br />
                    Direct Flights:
                    <input type="checkbox" />
                    <br />
                    <button className="search__button" type="submit">Search</button>
                </form>
            </div>
        </section>

    )
}


export default SearchSection



