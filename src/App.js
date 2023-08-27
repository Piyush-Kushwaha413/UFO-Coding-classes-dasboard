import { Routes,Route, NavLink } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Home } from "./pages/Home";
import { About } from "./pages/about";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Navbar } from "./componentes/navbar";
import { NotFound } from "./pages/notFound";
// import NotFound from "./pages/notFound";
import "./App.css";
import { useState } from "react";
// https://codehelp-router-project.netlify.app/
function App() {
  const[checkLog,setCheckLog] = useState(false);
  console.log(checkLog);
                                        //  bg-gradient-to-r from-cyan-500 to-blue-500"

  return(
  <div className="main-div w-[100vw] min-h-[100vh] flex flex-col gap-[100px]   ">
    <Navbar checkLog={checkLog} setCheckLog={setCheckLog}> </Navbar>

{/* <Home></Home> */}
    <Routes>
      
      <Route path="/" element={<Home></Home>}>  </Route>
      <Route path="/about" element={<About></About>}>  </Route>
      <Route path="/login" element={<Login setCheckLog={setCheckLog} ></Login>}></Route>
      <Route path="/signup" element={<Signup setCheckLog={setCheckLog} ></Signup>}></Route>
      <Route path="/dasboard" element={<Dashboard></Dashboard>}></Route>
      <Route path="*"element={<NotFound></NotFound>} ></Route>
     
    </Routes>
  
    
    </div>) 
}
{/*  */}
export default App;



// 