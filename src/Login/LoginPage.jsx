import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <>
      <div>
        <Link to="/admin">
          <p>Admin</p>
        </Link>
        <Link to="/user">
          <p>User</p>
        </Link>
        <div className=" container w-25">
        <form className="px-4 py-3">
          <div className="mb-3">
            <label for="email" className="form-label">User Account</label>
            <input type="email" className="form-control" id="email" placeholder="Username" />
          </div>
          <div className="mb-3">
            <label for="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Password" />
          </div>
          <div className="mb-3">
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="dropdownCheck" />
              <label className="form-check-label" for="dropdownCheck">
                Remember me
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Sign in</button>
        </form>
        <div className="dropdown-divider"></div>
        <a className="dropdown-item text-center" href="#">Forgot password?</a>
      </div>
      </div>
    </>
  );
}

export default LoginPage;
