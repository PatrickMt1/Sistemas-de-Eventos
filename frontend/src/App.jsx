import { ChakraProvider } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import ListEvent from "./pages/ListEvent";
import ListUser from "./pages/ListUser";
import Login from "./pages/Login";
import Payment from "./pages/Payment";
import RegisterEvent from "./pages/RegisterEvent";
import RegisterUser from "./pages/RegisterUser";
import UpdateEvent from "./pages/UpdateEvent";
import UpdateUser from "./pages/UpdateUser";
import Catalog from "./pages/Catalog";

function App() {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/login" element={<Login />} />
        <Route element={<Sidebar />}>
          <Route path="/registerUser" element={<RegisterUser />} />
          <Route path="/registerEvent" element={<RegisterEvent />} />
          <Route path="/list/user" element={<ListUser />} />
          <Route path="/list/event" element={<ListEvent />} />
          <Route path="/update/user/:id" element={<UpdateUser />} />
          <Route path="/update/event/:id" element={<UpdateEvent />} />
          <Route path="/payment" element={<Payment />} />
        </Route>
      </Routes>
    </ChakraProvider>
  );
}
export default App;
