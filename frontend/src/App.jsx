import { ChakraProvider } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Catalog from "./pages/Catalog";
import ListEvent from "./pages/ListEvent";
import ListUser from "./pages/ListUser";
import Login from "./pages/Login";
import Payment from "./pages/Payment";
import RegisterEvent from "./pages/RegisterEvent";
import RegisterUser from "./pages/RegisterUser";
import UpdateEvent from "./pages/UpdateEvent";
import UpdateUser from "./pages/UpdateUser";
import Cart from "./pages/Cart/Cart";
import "./lib/dayjs";

function App() {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registerUser" element={<RegisterUser />} />
        <Route element={<Sidebar />}>
          <Route path="/registerEvent" element={<RegisterEvent />} />
          <Route path="/list/user" element={<ListUser />} />
          <Route path="/list/event" element={<ListEvent />} />

          <Route path="/update/event/:id" element={<UpdateEvent />} />
        </Route>
        <Route element={<Navbar />}>
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/update/user/:id" element={<UpdateUser />} />
        </Route>
      </Routes>
    </ChakraProvider>
  );
}
export default App;
