import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <>
      <div>
        <Link to="/home-cashier">
          <p>Cashier</p>
        </Link>
        <Link to="/home-kitchen">
          <p>Kitchen</p>
        </Link>
        <Link to="/home-food-server">
          <p>FoodServer</p>
        </Link>
      </div>
    </>
  );
}

export default LoginPage;
