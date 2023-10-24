import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"> 
          <img src="/logo.png" className="logo" alt="logo"/>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link active" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/upload">
              Upload
            </Link>
          </div>
        </div>
      </div>
    </nav>
    <Outlet />
    </div>
  )
}
export default Navbar;
