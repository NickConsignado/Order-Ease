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
              <span className="navbar-brand text-light">Restaurants</span>
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
            <div className="offcanvas-header">
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
            <div className="offcanvas-body">
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
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* Kitchen Page Body */}
      <div className="adminBody d-flex ">
        {/* 1st card */}

        <div className="adminCard text-light mt-5 pt-3 me-5 col-2">
          <div className="card-body">
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
        <div className="d-flex my-5 py-5">
          {/* 2nd card */}
          <div className="adminCard my-5 me-5 col-5">
            <div className="ms-3 mt-3 text-light">
              <h5>Order #2</h5>
              <h6>T-2</h6>
              {/* Order list body */}
              <div className="d-flex">
                <div className="w-50">
                  <p>6 - pc. Chicken joy</p>
                  <p>2 - pc. Pancakes</p>
                  <p>2 - pc. Coffee</p>
                </div>
                <div className="w-50">
                  <p className="text-warning">Preparing</p>
                  <p className="text-success">Ready</p>
                  <p className="text-danger">Cancelled</p>
                </div>
              </div>
            </div>
          </div>
          {/* 3rd card */}
          <div className="card my-5 me-5 col-5">
            <div className="card-body">
              <h5>Order #3</h5>
              <h6>T-3</h6>
            </div>
          </div>
          {/* 4th card */}
          <div className="card my-5 me-5 col-5">
            <div className="card-body">
              <h5>Order #4</h5>
              <h6>T-4</h6>
            </div>
          </div>
          {/* 5th card */}
          <div className="card my-5 me-5 col-5">
            <div className="card-body">
              <h5>Order #5</h5>
              <h6>T-5</h6>
            </div>
          </div>
        </div>
      </div>

      <div>Admin Hello world</div>
    </>
  );
}

export default Admin;
