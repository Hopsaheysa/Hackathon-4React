import { DateTime } from 'luxon';

function SearchSection(props) {
    function handleSubmit(event) {
        event.preventDefault();
        console.log(event.target[0].value);
        console.log(event.target[1].value);
        // console.log(event);
        const dateFrom = DateTime.fromISO(event.target[2].value);
        console.log(dateFrom);
        // DateTime.fromFormat(event.target[2].value, "" * 1000).toFormat('hh:mm')

        // props.setSearchQuery(event.target.value);
    }


    return (
        <section id="section_one">
            <div>
                <h2>Where do you want to go?</h2>
                   <br />
                <form onSubmit={(event) => handleSubmit(event)}>
                    <p>From:
                    </p>
                    <select name="destinations" id="destinations">
                        <option value="VLC">Valencia</option>
                        <option value="BCN">Barcelona</option>
                        <option value="MAD">Madrid</option>
                        <option value="MXP">Milano</option>
                        <option value="PRG">Prague</option>
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
                    <input type="date" defaultValue="2021-06-26" min="2021-06-25"/>
                     <br />
                     Return:
                     <br />
                    <input type="date" defaultValue="2021-06-30" />
                 
                    <br />
                    <button className="search__button" type="submit">Search</button>
                </form>
            </div>
        </section>

    )
}


export default SearchSection



