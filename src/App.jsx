import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./admin/Admin";
import HomeCashier from "./cashier/HomeCashier";
import HomeFoodServer from "./foodServer/HomeFoodServer";
import LoginPage from "./Login/LoginPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home-cashier" element={<HomeCashier />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/home-food-server" element={<HomeFoodServer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
