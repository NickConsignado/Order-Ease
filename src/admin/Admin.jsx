import { NavLink } from "react-router-dom";

function Admin() {
  return (
    <>
      <nav className="adminNav navbar text-light fixed-top">
        <div className="container-fluid">
          <div>
            <NavLink to="" style={{ textDecoration: "none" }}>
              <span className="navbar-brand text-light">Admin</span>
            </NavLink>

          </div>
          <h1>Logo</h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="adminNav offcanvas-header ">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Admin
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className=" offcanvas-body ">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Link
                  </a>
                </li>
                
                  <li>
                    
                    <NavLink to="/admin" style={{ textDecoration: "none" }}>
              <span className="navbar-brand">Logout</span>
            </NavLink>
                  </li>
               
              </ul>
            </div>
          </div>
        </div>
      </nav>
<div className="mt-5 pt-3 "></div>
      <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
      <div>Admin Hello world</div>
    </>
  );
}

export default Admin;
