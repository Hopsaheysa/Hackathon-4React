function Contact() {
  return(
      <div>
      <div id="section-contact" class="section-contact">
        
          <h1>Have a nice flight!</h1>
            <h2>We would love to hear from you...</h2>
            <form>
                <label>
                    <br/>
                {/* <select name="destinations" id="destinations">
                            <option value="Amazing">Amazing</option>
                            <option value="Not bad">Not bad</option>
                            <option value="Terrible">Terrible</option>
                </select> */}
                <textarea rows="6" class="form__textarea"></textarea>
                <br/>
                <button class="form__button">Send my message</button>
                </label>
            </form>
      </div>
     </div>

  )
}

export default Contact;