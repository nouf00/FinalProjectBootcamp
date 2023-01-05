import { ChakraProvider, theme } from "@chakra-ui/react";
import ProfileNav from "./navbar/profileNav/ProfileNav";
import HomeMenuNav from "./navbar/HomeMenuNav";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import Nav from "./navbar/Navbar";
import Test from "./components/Test";

import Sidebar from "./navbar/Sidebar";
import HomeNav from "./navbar/HomeNavbar";
import Chatlist from "./chat/Chatlist";
import CahtSlidbar from "./chat/CahtSlidbar";
import CahtPage from "./chat/CahtPage";
import Chef from "./components/Chef";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChefRegister from "./components/ChefRegister";
import FoodyRegister from "./components/FoodyRegister";
import FoodyHome from "./components/FoodyHome";

export const App = () => (
  <BrowserRouter>

  <ChakraProvider theme={theme}>
   <Routes>
   <Route path="/" element={<Homepage/>}></Route>
    <Route path="/login" element={<Login />}> </Route>
        <Route path="/chefregister" element={<ChefRegister />}></Route>
        <Route path="/foodyregister" element={<FoodyRegister />}></Route>
        <Route path="foody" element={<FoodyHome/>}></Route>
        {/* <Route path ="/foodtype" */}
        <Route path="/chef" element={<Chef />}></Route>
    </Routes>
  </ChakraProvider>
  </BrowserRouter>

);
