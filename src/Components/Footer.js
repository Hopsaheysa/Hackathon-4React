function Footer(){
    return(
         <footer className="footer">
        <nav>
          <div className="footer__nav">
            <ul className="footer__nav__list">
              <li><a href="#" className="link_2">Destination</a></li>
              <li><a href="#" className="link_2">Daily Deals</a></li>
              <li><a href="" className="link_2">Contact</a></li>
            </ul>
          </div>
        </nav>
        <div className="footer__social">
          <h4>#skyspanner</h4>
          <br />
          <p>
            Follow us on
            <a href="#" className="link_3">Twitter</a>
            and
            <a href="#" className="link_3"> Facebook</a>
          </p>
        </div>
      </footer>
    )
}

export default Footer