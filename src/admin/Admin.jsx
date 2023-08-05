import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/LOGO.PNG";

function Admin() {
  return (
    <>
      <nav className="adminNav navbar fixed-top">
        <div className="container-fluid ">
          <div>
            <NavLink to="/admin" style={{ textDecoration: "none" }}>
              <span className="navbar-brand">
                <img src={Logo} alt="" width={"100"} />
              </span>
            </NavLink>
            <span className="navbar-expand-lg">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span>
                  <i className="fa-solid fa-ellipsis fa-xl"></i>
                </span>
              </button>
            </span>
          </div>

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

                <div className="container-fluid flex-wrap d-flex mt-5 pt-5 mb-3">
                  <Link to="https://www.facebook.com/">
                    <span className="me-4">
                      <i className="fa-brands fa-facebook-f fa-xl text-dark"></i>
                    </span>
                  </Link>
                  <Link to="https://www.instagram.com/">
                    <span className="me-4">
                      <i className="fa-brands fa-instagram fa-xl text-dark"></i>
                    </span>
                  </Link>
                  <Link to="https://twitter.com/i/flow/login">
                    <span className="me-4">
                      <i className="fa-brands fa-x-twitter fa-xl text-dark"></i>
                    </span>
                  </Link>
                  <Link to="https://discord.com/">
                    <span className="me-4">
                      <i className="fa-brands fa-discord fa-xl text-dark"></i>
                    </span>
                  </Link>
                  <Link to="https://www.twitch.tv/">
                    <span className="me-4">
                      <i className="fa-brands fa-twitch fa-xl text-dark"></i>
                    </span>
                  </Link>
                </div>
                <b>
                  <span className="d-flex flex-wrap ">
                    <a className="nav-link ms-2" href="#">
                      Privacy
                    </a>
                    <a className="nav-link ms-2" href="#">
                      · Terms
                    </a>
                    <a className="nav-link ms-2" href="#">
                      · Advertising
                    </a>
                    <a className="nav-link ms-2" href="#">
                      · Ad Choices
                    </a>
                    <a className="nav-link ms-2" href="#">
                      · Cookies
                    </a>
                    <a className="nav-link ms-2" href="#">
                      · More
                    </a>
                    <a className="nav-link ms-2" href="#">
                      · SALESTALKS © 2023
                    </a>
                  </span>
                </b>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className="mt-5 pt-3 "></div>

      <div className="d-flex row align-items-baseline flex-wrap">
      <nav className="adminCard navbar navbar-expand-lg col-lg-3">
        <div className="container-fluid border rounded">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav row">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Admin Dashboard
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Manage Accounts
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  User List
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>



      {/* Admin Body */}
      <div className="container-fluid col-lg-9 ">
        <div className="container border rounded">Hello World
        <br /> <br /> <br /> <br /> <br /> <br /> <br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
        </div>
      </div>
      
    </>
  );
}

export default Admin;
