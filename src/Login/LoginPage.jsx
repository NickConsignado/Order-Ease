import { Link } from "react-router-dom"

function LoginPage (){
    return(
        <>
        <Link to="/home-cashier"><p>Cashier</p></Link>
        <Link to="/home-kitchen"><p>Kitchen</p></Link>
        <Link to="/home-food-server"><p>FoodServer</p></Link>
        </>
    )
}

export default LoginPage