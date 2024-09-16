import "bootstrap/dist/css/bootstrap.min.css" 

function Header() {
    return(
        <><nav className="custom-navbar navbar navbar-expand-md navbar-dark bg-dark" aria-label="Furni navigation bar">
        <div className="container">
          <a className="navbar-brand" href="/home">Amafli<span>.</span></a>
  
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarsFurni" 
            aria-controls="navbarsFurni" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
  
          <div className="collapse navbar-collapse" id="navbarsFurni">
            <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
              <li className="nav-item active">
                <a className="nav-link" href="/home">Home</a>
              </li>
              <li><a className="nav-link" href="https://github.com/dharshanPalani/">About us</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
    )
}

export default Header