function SearchSection(props) {
    function handleSubmit(event) {
        event.preventDefault();
        console.log(event.target[0].value);
        console.log(event.target[1].value);
        console.log(event.target[2].value);
        console.log(event.target[3].value);
        // props.setSearchQuery(event.target.value);
    }


    return (
        <section id="section_one">
            <div>
                <h2>Where do you want to go?</h2>
                <form onSubmit={(event) => handleSubmit(event)}>
                    <br />
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
                    <button className="search__button" type="submit">Search</button>
                </form>
            </div>
        </section>

    )
}


export default SearchSection



