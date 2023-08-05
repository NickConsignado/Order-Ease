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
      </div>
    </>
  );
}

export default LoginPage;
