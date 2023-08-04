import { NavLink } from "react-router-dom";

function Admin() {
  return (
    <>
      <nav className="adminNav navbar text-light fixed-top">
        <div className="container-fluid">
          <div>
            <NavLink style={{ textDecoration: "none" }}>
              <span className="navbar-brand text-light">Admin</span>
            </NavLink>
            
            <NavLink style={{ textDecoration: "none" }}>
              <span className="navbar-brand text-light">User List</span>
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
                    
                    <NavLink to="/" style={{ textDecoration: "none" }}>
              <span className="navbar-brand">Logout</span>
            </NavLink>
                  </li>
               
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* Kitchen Page Body */}
      <div className="adminBody d-flex">
        {/* 1st card */}

        <div className="adminCard text-light mt-5 pt-4 me-5 col-lg-2">
          <div>
            <h5>Sorting</h5>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <p>hello world</p>
          </div>
        </div>
        <div className="container-fluid d-flex my-5 py-5">
          {/* 2nd card */}
          <div className="adminCard my-5 me-5 col-lg-10 rounded">
            <div className="ms-3 mt-3 text-light">
              

            </div>
          </div>
        </div>
      </div>

      <div>Admin Hello world</div>
    </>
  );
}

export default Admin;
