import { ChakraProvider, theme } from "@chakra-ui/react";
// import ProfileNav from "./navbar/profileNav/ProfileNav";
// import HomeMenuNav from "./navbar/HomeMenuNav";
// import Homepage from "./components/Homepage";
// import Login from "./components/Login";
// import Nav from "./navbar/Navbar";
// import Test from "./components/Test";
// import ChefRegister from "./components/ChefRegister";
// import FoodyRegister from "./components/FoodyRegister";
// import Sidebar from "./navbar/Sidebar";
import SidebarV1 from "./navbar/Menu/SidebarV1";
// import HomeNav from "./navbar/HomeNavbar";

export const App = () => (
  <ChakraProvider theme={theme}>
    {/* <Test /> */}
    {/* <Nav />  */}
    {/* <Login />  */}
    {/* <ChefRegister /> */}
    {/* <FoodyRegister /> */}
    {/* <Homepage/> */}
    {/* <Sidebar /> */}
    <SidebarV1 />
    {/* <HomeNav /> */}
    {/* <HomeMenuNav/> */}
    {/* <ProfileNav /> */}
  </ChakraProvider>
);
