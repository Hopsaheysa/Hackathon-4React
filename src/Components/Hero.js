function Hero(props) {
    const airports = require("./airport-codes_json");
    console.log(airports);

    function handleFind(event) {
        event.preventDefault();
        props.setSearchQuery(event.target[0].value);

    }

    return (
        <div className="hero-text-box">
            <h1>Skyspanner</h1>
            <h2>Come fly with us</h2>
            <form onSubmit={(event) => handleFind(event)}>
                <input type="text" placeholder="e.g Nottingham" />
                <button className="btn_next">Find</button>
            </form>
        </div>

    )
}


export default Hero