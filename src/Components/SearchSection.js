function SearchSection() {
    return (
        <section id="section_one">
            <div>
               <h2>Where do you want to go?</h2>
               <br />
               <p>From: 
               </p>
                    <select name="destinations" id="destinations">
                        <option value="All">All</option>
                        <option value="Valencia">Valencia</option>
                        <option value="Barcelona">Barcelona</option>            
                        <option value="Madrid">Madrid</option>
                        <option value="Milano">Milano</option>
                        <option value="Milano">Milano</option>    
                        <option value="East Midlands Airport">East Midlands Airport</option>                                     
                    </select>
                      <br />
                <p>To: </p>
                    <select name="destinations" id="destinations">
                        <option value="All">All</option>
                        <option value="Valencia">Valencia</option>
                        <option value="Barcelona">Barcelona</option>            
                        <option value="Madrid">Madrid</option>
                        <option value="Milano">Milano</option>
                        <option value="Milano">Milano</option>    
                        <option value="East Midlands Airport">East Midlands Airport</option>                                     
                    </select>  
                      <br />     
                    <button class="search__button" type="submit">Search</button>
             </div>
          </section>    
       
    )
}


export default SearchSection



