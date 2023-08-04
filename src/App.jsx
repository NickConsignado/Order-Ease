import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./admin/Admin";
import User from "./user/User";

import LoginPage from "./Login/LoginPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
