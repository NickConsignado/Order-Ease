import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeKitchen from "./kitchen/HomeKitchen";
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
          <Route path="/home-kitchen" element={<HomeKitchen />} />
          <Route path="/home-food-server" element={<HomeFoodServer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
